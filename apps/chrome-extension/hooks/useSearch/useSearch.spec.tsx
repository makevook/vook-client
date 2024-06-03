import { renderHook } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { useSearch } from './useSearch'

const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>
)

describe('useSearch test', () => {
  beforeEach(() => {
    vi.mock('@tanstack/react-query', async () => {
      const useQuery = vi.fn()
      const reactQuery = await vi.importActual('@tanstack/react-query')
      useQuery.mockReturnValue({
        data: [
          {
            term: '<strong>test1</strong>',
            meaning: 'test meaning',
            synonyms: 'test synonyms',
          },
          {
            term: '<strong>test2</strong>',
            meaning: 'test meaning',
            synonyms: 'test synonyms',
          },
          {
            term: '<strong>test3</strong>',
            meaning: 'test meaning',
            synonyms: 'test synonyms',
          },
          {
            term: '<strong>test4</strong>',
            meaning: 'test meaning',
            synonyms: 'test synonyms',
          },
          {
            term: 'other',
            meaning: 'other meaning',
            synonyms: 'other synonyms',
          },
        ],
      })

      return {
        ...reactQuery,
        useQuery,
      }
    })
  })
  it('searchedTerms은 html 태그가 필터링된 모든 단어 배열을 반환한다.', () => {
    const { result } = renderHook(
      () => useSearch({ selectedText: 'test1 test2' }),
      {
        wrapper,
      },
    )

    expect(result.current.searchedTerms).toEqual([
      'test1',
      'test2',
      'test3',
      'test4',
      'other',
    ])
  })

  it('hitsTerms는 검색 문장에 포함된 단어 목록을 반환한다.', () => {
    const { result } = renderHook(() => useSearch({ selectedText: 'test' }), {
      wrapper,
    })

    expect(result.current.hitsTerms).toEqual([
      'test1',
      'test2',
      'test3',
      'test4',
    ])
  })

  it('일치하는 단어가 존재하면서 3개 이상인 경우 "{query1}..., 3 등의 용어를 찾았습니다."를 생성한다.', () => {
    const { result } = renderHook(() => useSearch({ selectedText: 'test' }), {
      wrapper,
    })

    expect(`${result.current.headerText}${result.current.tailText}`).toBe(
      'test1, test2, test3 등의 용어를 찾았습니다.',
    )
  })

  it('일치하는 단어가 존재하면서 3개 이하인 경우 "{query1}..., 3 용어를 찾았습니다."를 생성한다.', () => {
    const { result } = renderHook(
      () => useSearch({ selectedText: 'test1 test2 test3' }),
      {
        wrapper,
      },
    )

    expect(`${result.current.headerText}${result.current.tailText}`).toBe(
      'test1, test2, test3 용어를 찾았습니다.',
    )
  })

  it('일치하는 단어가 존재하지 않을 경우 "{query}에 대한 검색 결과가 없습니다."를 생성한다.', () => {
    const { result } = renderHook(
      () => useSearch({ selectedText: 'nothing' }),
      {
        wrapper,
      },
    )

    expect(`${result.current.headerText}${result.current.tailText}`).toBe(
      'nothing에 대한 검색 결과가 없습니다.',
    )
  })
})
