import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import {
  VocabularyCreateDTO,
  VocabularyEditDTO,
  VocabularyInfoResponse,
} from './model'

export const vocabularyService = {
  async getVocabularyInfo(client: QueryClient) {
    return APIBuilder.get('/vocabularies')
      .withCredentials(client)
      .build()
      .call<VocabularyInfoResponse>()
  },
  async editVocabularyInfo(
    client: QueryClient,
    uid: string,
    dto: VocabularyEditDTO,
  ) {
    return APIBuilder.put(`/vocabularies/${uid}`)
      .withCredentials(client)
      .build()
      .call<VocabularyInfoResponse>({ body: JSON.stringify(dto) })
  },
  async deletetVocabularyInfo(client: QueryClient, uid: string) {
    return APIBuilder.delete(`/vocabularies/${uid}`)
      .withCredentials(client)
      .build()
      .call<VocabularyInfoResponse>()
  },
  async createVocabularyInfo(client: QueryClient, dto: VocabularyCreateDTO) {
    return APIBuilder.post('/vocabularies')
      .withCredentials(client)
      .build()
      .call<VocabularyInfoResponse>({ body: JSON.stringify(dto) })
  },
}
