import { MockInstance } from 'vitest'

import { localStorageUtils } from '@/utils/localStorage'
import { renderer } from '@/utils/testing'

import { SearchBox } from './SearchBox'
import { SearchHistoryProvider } from './hooks/useSearchHistory'

describe('useSearchBox', () => {
  const vocabularyID = 'example'

  let setLocalStorageSpy: MockInstance

  beforeEach(() => {
    localStorageUtils.setLocalStorage('example_searchHistory', ['검색어1'])
    setLocalStorageSpy = vi.spyOn(localStorageUtils, 'setLocalStorage')
  })

  it('검색 박스를 focus시 검색 기록이 노출된다.', async () => {
    // given
    const { user, findByRole, findByText } = renderer(
      <SearchHistoryProvider vocabularyID={vocabularyID}>
        <SearchBox />
      </SearchHistoryProvider>,
    )
    const searchInput = await findByRole('searchbox')

    // when
    await user.click(searchInput)

    // then
    const historyItem = await findByText('검색어1')
    expect(historyItem).toBeInTheDocument()
  })

  it('검색은 엔터를 통해 제출 가능하다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <SearchHistoryProvider vocabularyID={vocabularyID}>
        <SearchBox />
      </SearchHistoryProvider>,
    )
    const searchInput = await findByRole('searchbox')

    // when
    await user.type(searchInput, '검색어2{enter}')

    // then
    expect(setLocalStorageSpy).toHaveBeenCalledWith('example_searchHistory', [
      '검색어2',
      '검색어1',
    ])
  })

  it('검색은 검색 아이콘을 통해 제출 가능하다.', async () => {
    // given
    const { user, findByRole, findByTitle } = renderer(
      <SearchHistoryProvider vocabularyID={vocabularyID}>
        <SearchBox />
      </SearchHistoryProvider>,
    )
    const searchInput = await findByRole('searchbox')

    // when
    const searchIcon = await findByTitle('search big')
    await user.type(searchInput, '검색어2')
    await user.click(searchIcon)

    // then
    expect(setLocalStorageSpy).toHaveBeenCalledWith('example_searchHistory', [
      '검색어2',
      '검색어1',
    ])
  })

  it('검색 기록을 삭제할 수 있다.', async () => {
    // given
    const { user, findByRole, queryByText } = renderer(
      <SearchHistoryProvider vocabularyID={vocabularyID}>
        <SearchBox />
      </SearchHistoryProvider>,
    )
    const searchInput = await findByRole('searchbox')

    // when
    await user.click(searchInput)

    // then
    const ogHistoryItems = queryByText('검색어1')
    expect(ogHistoryItems).toBeInTheDocument()

    // when
    const deleteButton = (await findByRole('list')).querySelector('button')
    await user.click(deleteButton!)

    // then
    const historyItems = queryByText('검색어1')
    expect(historyItems).not.toBeInTheDocument()
    expect(setLocalStorageSpy).toHaveBeenCalledWith('example_searchHistory', [])
  })
})
