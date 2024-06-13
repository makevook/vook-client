import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { MockInstance } from 'vitest'

import { localStorageUtils } from '@/utils/localStorage'

import { useSearchBox } from './useSearchBox'
import { SearchHistoryProvider } from './useSearchHistory'

describe('useSearchBox', () => {
  const vocabularyID = 'example'

  let getLocalStorageSpy: MockInstance
  let setLocalStorageSpy: MockInstance

  beforeEach(() => {
    localStorageUtils.setLocalStorage('example_searchHistory', [])
    getLocalStorageSpy = vi.spyOn(localStorageUtils, 'getLocalStorage')
    setLocalStorageSpy = vi.spyOn(localStorageUtils, 'setLocalStorage')
  })

  it('검색을 제출하고 검색 기록이 상태와 로컬 스토리지에 업데이트되어야 한다.', () => {
    // given
    const { result } = renderHook(useSearchBox, {
      wrapper: ({ children }) => (
        <SearchHistoryProvider vocabularyID={vocabularyID}>
          {children}
        </SearchHistoryProvider>
      ),
    })

    // when
    act(() => {
      result.current.submitSearch('apple')
    })

    // then
    expect(result.current.searchValue).toBe('')
    expect(result.current.searchHistory).toEqual(['apple'])
    expect(setLocalStorageSpy).toHaveBeenCalledWith('example_searchHistory', [
      'apple',
    ])
  })

  it('검색기록은 10개 초과 시 오래된 기록이 제거된다.', () => {
    // given
    const { result } = renderHook(useSearchBox, {
      wrapper: ({ children }) => (
        <SearchHistoryProvider vocabularyID={vocabularyID}>
          {children}
        </SearchHistoryProvider>
      ),
    })

    // when
    for (let i = 0; i < 15; i++) {
      act(() => {
        result.current.submitSearch(i.toString())
      })
    }

    // then
    const history = ['14', '13', '12', '11', '10', '9', '8', '7', '6', '5']
    expect(result.current.searchHistory).toHaveLength(10)
    expect(result.current.searchHistory).toEqual(history)
    expect(setLocalStorageSpy).toHaveBeenCalledWith(
      'example_searchHistory',
      history,
    )
  })

  it('검색 기록 삭제가 이루어져야 한다.', () => {
    // given
    const { result } = renderHook(useSearchBox, {
      wrapper: ({ children }) => (
        <SearchHistoryProvider vocabularyID={vocabularyID}>
          {children}
        </SearchHistoryProvider>
      ),
    })

    // when
    act(() => {
      result.current.submitSearch('apple')
    })
    act(() => {
      result.current.submitSearch('banana')
    })
    act(() => {
      result.current.submitSearch('cherry')
    })
    act(() => {
      result.current.deleteHistory(2)
    })

    expect(result.current.searchHistory).toEqual(['cherry', 'banana'])
  })

  it('히스토리의 기본값은 로컬스토리지를 통해 가져온다.', () => {
    // given
    getLocalStorageSpy.mockReturnValue(['apple'])
    const { result } = renderHook(useSearchBox, {
      wrapper: ({ children }) => (
        <SearchHistoryProvider vocabularyID={vocabularyID}>
          {children}
        </SearchHistoryProvider>
      ),
    })

    // when && then
    expect(result.current.isFocused).toBe(false)
    expect(result.current.searchValue).toBe('')
    expect(result.current.searchHistory).toEqual(['apple'])
  })
})
