import { useQuery } from '@tanstack/react-query'
import { serchQueryOptions } from '@vook-client/api'

import { getHeaderText, getHitsTerms, getSearchTerms, getTailText } from './lib'

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
