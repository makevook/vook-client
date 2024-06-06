import { useQuery } from '@tanstack/react-query'
import { serchQueryOptions } from '@vook-client/api'
import { useMemo } from 'react'

import { stripHtmlTags } from '../../utils/parser'

interface UseSearchProps {
  selectedText: string
}

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

  const searchedTerms = useMemo(() => {
    return query.data ? query.data.map((hit) => stripHtmlTags(hit.term)) : []
  }, [query.data])

  const hitsTerms = useMemo(() => {
    return searchedTerms.filter((term) => {
      return selectedText.includes(term) || term.includes(selectedText)
    })
  }, [searchedTerms, selectedText])

  const headerText = useMemo(() => {
    return hitsTerms.length === 0
      ? selectedText
      : `${hitsTerms.slice(0, 3).join(', ')}`
  }, [hitsTerms, selectedText])

  const tailText = useMemo(() => {
    return hitsTerms.length > 0
      ? `${hitsTerms.length > 3 ? ' 등의' : ''} 용어를 찾았습니다.`
      : '에 대한 검색 결과가 없습니다.'
  }, [hitsTerms])

  return {
    query,
    hitsTerms,
    headerText,
    tailText,
  }
}
