import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import { AddTermDTO, AddTermResponse, GetTermResponse } from './model'

export const termService = {
  async getTerm(client: QueryClient, vocabularyUid: string) {
    return APIBuilder.get(`/terms?vocabularyUid=${vocabularyUid}`)
      .withCredentials(client)
      .build()
      .call<GetTermResponse>()
  },
  async addTerm(client: QueryClient, dto: AddTermDTO) {
    return APIBuilder.post('/terms')
      .withCredentials(client)
      .build()
      .call<AddTermResponse>({ body: JSON.stringify(dto) })
  },
}
