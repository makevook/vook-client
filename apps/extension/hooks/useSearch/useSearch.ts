import { useQuery } from '@tanstack/react-query'
import { serchQueryOptions, type SearchResponse } from '@vook-client/api'
import {
  pipe,
  take,
  pluck,
  map,
  toArray,
  filter,
  isEmpty,
  join,
} from '@fxts/core'

import { stripHtmlTags } from '../../utils/parser'

interface UseSearchProps {
  selectedText: string
}

const MAX_HITS_QUANTITY = 3

export const getSearchTerms = (hits: SearchResponse['result']['hits']) => {
  return pipe(hits, pluck('term'), map(stripHtmlTags), take(4), toArray)
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
  const query = useQuery({
    ...serchQueryOptions.get({
      query: `${selectedText}`,
      withFormat: true,
      highlightPreTag: '<strong>',
      highlightPostTag: '</strong>',
    }),
    select: (data) => data.result.hits,
  })

  const searchedTerms = getSearchTerms(query.data || [])
  const hitsTerms = getHitsTerms(searchedTerms, selectedText)
  const headerText = getHeaderText(hitsTerms, selectedText)
  const tailText = getTailText(hitsTerms)

  return {
    query,
    hitsTerms,
    headerText,
    tailText,
  }
}
