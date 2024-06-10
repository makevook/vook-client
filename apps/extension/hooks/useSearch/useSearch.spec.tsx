import { renderHook } from '@testing-library/react'
import * as ReactQuery from '@tanstack/react-query'
import type { SearchResponse } from '@vook-client/api'

import {
  useSearch,
  getSearchTerms,
  getHitsTerms,
  isSubstring,
  getHeaderText,
  getTailText,
} from './useSearch'

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

describe('getSearchTerms test', () => {
  it('hits에서 검색어를 추출해야 한다', () => {
    // given
    const hits: SearchResponse['result']['hits'] = [
      {
        term: '<p>JavaScript</p>',
        synonyms: 'JS',
        meaning: 'A programming language commonly used for web development.',
      },
      {
        term: 'TypeScript',
        synonyms: 'TS',
        meaning: 'A superset of JavaScript that adds static typing.',
      },
      {
        term: 'React',
        synonyms: 'ReactJS',
        meaning: 'A JavaScript library for building user interfaces.',
      },
    ]

    // when
    const result = getSearchTerms(hits)

    // then
    expect(result).toEqual(['JavaScript', 'TypeScript', 'React'])
  })
})

describe('getHitsTerms test', () => {
  it('terms와 selectedText를 비교하여 일치하는 검색어를 반환해야 한다', () => {
    // given
    const terms = ['JavaScript', 'TypeScript', 'React']
    const selectedText = 'Script'

    // when
    const result = getHitsTerms(terms, selectedText)

    // then
    expect(result).toEqual(['JavaScript', 'TypeScript'])
  })

  it('terms와 selectedText를 비교하여 일치하는 검색어가 없을 경우 빈 배열을 반환해야 한다', () => {
    // given
    const terms = ['JavaScript', 'TypeScript', 'React']
    const selectedText = 'Vue'

    // when
    const result = getHitsTerms(terms, selectedText)

    // then
    expect(result).toEqual([])
  })
})
describe('isSubstring test', () => {
  it.each([
    { v1: 'JavaScript', v2: 'Script' },
    { v1: 'React', v2: 'ReactJS' },
  ])(
    '두 문자열 중 하나가 다른 문자열의 부분 문자열인 경우 true를 반환해야 한다',
    ({ v1, v2 }) => {
      // when
      const result = isSubstring(v1, v2)

      // then
      expect(result).toBe(true)
    },
  )

  it('두 문자열이 서로 부분 문자열이 아닌 경우 false를 반환해야 한다', () => {
    // given
    const v1 = 'JavaScript'
    const v2 = 'TypeScript'

    // when
    const result = isSubstring(v1, v2)

    // then
    expect(result).toBe(false)
  })
})
describe('getHeaderText test', () => {
  it('terms가 비어있을 경우 selectedText를 반환해야 한다', () => {
    // given
    const terms: string[] = []
    const selectedText = 'JavaScript'
    // when
    const result = getHeaderText(terms, selectedText)
    // then
    expect(result).toBe('JavaScript')
  })

  it('terms의 길이가 3보다 작을 경우 모든 용어를 쉼표로 구분하여 반환해야 한다', () => {
    // given
    const terms = ['JavaScript', 'TypeScript', 'React']
    const selectedText = 'JavaScript'

    // when
    const result = getHeaderText(terms, selectedText)

    // then
    expect(result).toBe('JavaScript, TypeScript, React')
  })

  it('terms의 길이가 3보다 클 경우 3만큼의 용어를 쉼표로 구분하여 반환해야 한다', () => {
    // given
    const terms = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular']
    const selectedText = 'JavaScript'

    // when
    const result = getHeaderText(terms, selectedText)

    // then
    expect(result).toBe('JavaScript, TypeScript, React')
  })
})

describe('getTailText test', () => {
  it('terms가 비어있을 경우 "에 대한 검색 결과가 없습니다."를 반환해야 한다', () => {
    // given
    const terms: string[] = []

    // when
    const result = getTailText(terms)

    // then
    expect(result).toBe('에 대한 검색 결과가 없습니다.')
  })

  it('terms의 길이가 3보다 작을 경우 " 용어를 찾았습니다."를 반환해야 한다', () => {
    // given
    const terms = ['JavaScript', 'TypeScript', 'React']
    // when
    const result = getTailText(terms)
    // then
    expect(result).toBe(' 용어를 찾았습니다.')
  })

  it('terms의 길이가 3보다 클 경우 " 등의 용어를 찾았습니다."를 반환해야 한다', () => {
    // given
    const terms = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular']

    // when
    const result = getTailText(terms)

    // then
    expect(result).toBe(' 등의 용어를 찾았습니다.')
  })
})
