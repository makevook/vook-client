import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import { SearchDTO, SearchResponse } from './model'

export const searchService = {
  async search(dto: SearchDTO, client: QueryClient) {
    return APIBuilder.post('/terms/search')
      .withCredentials(client)
      .build()
      .call<SearchResponse>({
        body: JSON.stringify(dto),
      })
  },
}
