import { baseFetcher } from '../../lib/fetcher'

import { SearchDTO, SearchResponse } from './model'

export const searchService = {
  async search(body: SearchDTO) {
    return baseFetcher.post<SearchResponse>('/demo/terms/search', {
      body: JSON.stringify(body),
    })
  },
}
