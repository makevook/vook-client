import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  searchQueryOptions,
  vocabularyOptions,
  type SearchResponse,
} from '@vook-client/api'
import {
  pipe,
  take,
  pluck,
  toArray,
  filter,
  isEmpty,
  join,
  flat,
} from '@fxts/core'

interface UseSearchProps {
  selectedText: string
}

const MAX_HITS_QUANTITY = 3

export const countTotalHits = (
  records: SearchResponse['result']['records'],
) => {
  return pipe(records, pluck('hits'), flat, toArray).length
}

export const getSearchTerms = (hits: SearchResponse['result']['records']) => {
  return pipe(hits, pluck('hits'), flat, take(4), pluck('term'), toArray)
}

export const isSubstring = (v1: string, v2: string) =>
  v1.includes(v2) || v2.includes(v1)

export const getHitsTerms = (terms: string[], selectedText: string) =>
  pipe(
    terms,
    filter((term) => isSubstring(term, selectedText)),
    toArray,
  )

export const getHeaderText = (terms: string[], selectedText: string) =>
  isEmpty(terms)
    ? selectedText
    : pipe(terms, take(MAX_HITS_QUANTITY), join(', '))

export const getTailText = (terms: string[]) =>
  isEmpty(terms)
    ? '에 대한 검색 결과가 없습니다.'
    : `${terms.length > MAX_HITS_QUANTITY ? ' 등의' : ''} 용어를 찾았습니다.`

export const useSearch = ({ selectedText }: UseSearchProps) => {
  const client = useQueryClient()

  const vocabularyQuery = useQuery({
    ...vocabularyOptions.vocabularyInfo(client),
  })

  const query = useQuery({
    ...searchQueryOptions.search(
      {
        query: selectedText,
        highlightPostTag: '<strong>',
        highlightPreTag: '</strong>',
        vocabularyUids:
          vocabularyQuery.data?.result.map((item) => item.uid) || [],
      },
      client,
    ),
    enabled: vocabularyQuery.isSuccess,
  })

  const totalCount = countTotalHits(query.data?.result.records || [])
  const searchedTerms = getSearchTerms(query.data?.result.records || [])
  const hitsTerms = getHitsTerms(searchedTerms, selectedText)
  const headerText = getHeaderText(hitsTerms, selectedText)
  const tailText = getTailText(hitsTerms)

  return {
    totalCount,
    query,
    hitsTerms,
    headerText,
    tailText,
  }
}
