import { baseFetcher } from '../../lib/fetcher'

import { SearchDTO, SearchResponse } from './model'

export const searchService = {
  async get(body: SearchDTO) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return baseFetcher.post<SearchResponse>('/demo/terms/search', {
      body: JSON.stringify(body),
    })
  },
}
