import { useQuery } from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { SearchDTO, SearchResponse, searchSort } from './model'
import { searchService } from './searchService'

export const serchQueryKeysGenerator = {
  get: (options: SearchDTO) => {
    const keys: Array<string> = ['search', options.query]

    keys.push(options.withFormat ? 'formmated' : 'raw')
    const sort = options.sort
      ? [...options.sort.sort((a, b) => a.localeCompare(b))]
      : [searchSort.SynonymsAsc]
    keys.push(...sort)

    return keys
  },
}

export const serchQueryOptions = {
  get: (options: SearchDTO) => ({
    queryKey: serchQueryKeysGenerator.get(options),
    queryFn: () => searchService.get(options),
  }),
}

export const useSearchQuery = (
  dto: SearchDTO,
  queryOptions: CustomQueryOptions<SearchResponse> = {},
) => {
  return useQuery<SearchResponse>({
    ...serchQueryOptions.get(dto),
    ...queryOptions,
  })
}
