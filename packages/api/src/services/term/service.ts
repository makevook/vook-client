import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import { GetTermResponse } from './model'

export const termService = {
  async getTerm(client: QueryClient, vocabularyUid: string) {
    return APIBuilder.get(`/term?vocabularyUid=${vocabularyUid}`)
      .withCredentials(client)
      .build()
      .call<GetTermResponse>()
  },
}
