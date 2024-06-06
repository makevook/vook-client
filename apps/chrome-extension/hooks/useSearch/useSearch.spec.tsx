import { renderHook } from '@testing-library/react'
import * as ReactQuery from '@tanstack/react-query'

import { useSearch } from './useSearch'

const wrapper = ({ children }) => (
  <ReactQuery.QueryClientProvider client={new ReactQuery.QueryClient()}>
    {children}
  </ReactQuery.QueryClientProvider>
)

vi.mock('@tanstack/react-query', async () => {
  const useQuery = vi.fn()
  const reactQuery = await vi.importActual('@tanstack/react-query')
  useQuery.mockReturnValue({
    data: [
      {
        term: '백엔드',
        meaning: '백엔드',
        synonyms: '백엔드',
      },
      {
        term: '프론트엔드',
        meaning: '프론트엔드',
        synonyms: '프론트엔드',
      },
      {
        term: '엔드 포인트',
        meaning: '엔드 포인트',
        synonyms: '엔드 포인트',
      },
      {
        term: '엔드 투 엔드',
        meaning: '엔드 투 엔드',
        synonyms: '엔드 투 엔드',
      },
    ],
  })

  return {
    ...reactQuery,
    useQuery,
  }
})

describe('useSearch test', () => {
  it('검색된 단어에 검색어가 포함될 경우 hitsTerms에 포함된다.', () => {
    // when
    const { result } = renderHook(() => useSearch({ selectedText: '엔드' }), {
      wrapper,
    })

    // then
    expect(result.current.hitsTerms).toEqual(
      expect.arrayContaining([
        '백엔드',
        '프론트엔드',
        '엔드 투 엔드',
        '엔드 포인트',
      ]),
    )
  })

  it('검색어가 검색된 단어에 포함될 경우 hitsTerms에 포함된다.', () => {
    // when
    const { result } = renderHook(
      () => useSearch({ selectedText: '프론트엔드 및 백엔드의 경우에는...' }),
      {
        wrapper,
      },
    )

    // then

    expect(result.current.hitsTerms).toEqual(
      expect.arrayContaining(['백엔드', '프론트엔드']),
    )
  })

  it('일치하는 검색 단어가 3개 이상일 경우 "{term}... 등의 용어를 찾았습니다."가 생성된다.', () => {
    // when
    const { result } = renderHook(() => useSearch({ selectedText: '엔드' }), {
      wrapper,
    })

    // then
    expect(`${result.current.headerText}${result.current.tailText}`).toBe(
      '백엔드, 프론트엔드, 엔드 포인트 등의 용어를 찾았습니다.',
    )
  })

  it('일치하는 단어가 존재하면서 3개 이하인 경우 "{term}... 용어를 찾았습니다."를 생성한다.', () => {
    // when
    const { result } = renderHook(
      () =>
        useSearch({
          selectedText:
            '프론트엔드와 백엔드의 경우 엔드포인트를 통해 소통한다.',
        }),
      {
        wrapper,
      },
    )

    // then
    expect(`${result.current.headerText}${result.current.tailText}`).toBe(
      '백엔드, 프론트엔드 용어를 찾았습니다.',
    )
  })

  it('일치하는 단어가 존재하지 않을 경우 "{query}에 대한 검색 결과가 없습니다."를 생성한다.', () => {
    // when
    const { result } = renderHook(
      () => useSearch({ selectedText: '라이브러리' }),
      {
        wrapper,
      },
    )

    // then
    expect(`${result.current.headerText}${result.current.tailText}`).toBe(
      '라이브러리에 대한 검색 결과가 없습니다.',
    )
  })
})
