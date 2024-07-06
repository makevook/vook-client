import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { SearchDTO, SearchResponse } from './model'
import { searchService } from './searchService'

export const searchQueryOptions = {
  search: (dto: SearchDTO, client: QueryClient) => ({
    queryKey: ['search', dto],
    queryFn: () => searchService.search(dto, client),
  }),
}

export const useSearchQuery = (
  dto: SearchDTO,
  options: CustomQueryOptions<SearchResponse> = {},
) => {
  const client = useQueryClient()

  return useQuery<SearchResponse>({
    ...searchQueryOptions.search(dto, client),
    ...options,
  })
}
