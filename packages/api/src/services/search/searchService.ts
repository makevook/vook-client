import { APIBuilder } from '../../lib/fetcher'

import { SearchDTO, SearchResponse } from './model'

export const searchService = {
  async search(dto: SearchDTO) {
    return APIBuilder.post('/demo/terms/search')
      .build()
      .call<SearchResponse>({
        body: JSON.stringify(dto),
      })
  },
}
