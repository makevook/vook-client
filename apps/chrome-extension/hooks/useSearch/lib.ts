import {
  pipe,
  map,
  toArray,
  filter,
  pluck,
  take,
  isEmpty,
  join,
} from '@fxts/core'
import type { SearchResponse } from '@vook-client/api'

import { stripHtmlTags } from '../../utils/parser'

const MAX_HITS_QUANTITY = 3

export const getSearchTerms = (hits: SearchResponse['result']['hits']) => {
  return pipe(hits, take(4), pluck('term'), map(stripHtmlTags), toArray)
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
