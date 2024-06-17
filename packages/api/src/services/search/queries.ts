import { useQuery } from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { SearchDTO, SearchResponse, searchSort } from './model'
import { searchService } from './searchService'

export const searchQueryKeysGenerator = {
  search: (dto: SearchDTO) => {
    const keys: Array<string> = ['search', dto.query]

    keys.push(dto.withFormat ? 'formmated' : 'raw')
    const sort = dto.sort
      ? [...dto.sort.sort((a, b) => a.localeCompare(b))]
      : [searchSort.SynonymsAsc]
    keys.push(...sort)

    return keys
  },
}

export const searchQueryOptions = {
  search: (dto: SearchDTO) => ({
    queryKey: searchQueryKeysGenerator.search(dto),
    queryFn: () => searchService.search(dto),
  }),
}

export const useSearchQuery = (
  dto: SearchDTO,
  options: CustomQueryOptions<SearchResponse> = {},
) => {
  return useQuery<SearchResponse>({
    ...searchQueryOptions.search(dto),
    ...options,
  })
}
