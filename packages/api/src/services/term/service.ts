import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import {
  AddTermDTO,
  AddTermResponse,
  DeleteAllDTO as DeleteBatchDTO,
  EditTermDTO,
  GetTermResponse,
  TermSort,
} from './model'

export const termService = {
  async getTerm(client: QueryClient, vocabularyUid: string, sort?: TermSort[]) {
    let url = `/terms?vocabularyUid=${vocabularyUid}`
    if (sort) {
      url = url + '&sort=' + sort.join('&sort=')
    }

    return APIBuilder.get(url)
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
  async editTerm(client: QueryClient, dto: EditTermDTO, termUid: string) {
    return APIBuilder.put(`/terms/${termUid}`)
      .withCredentials(client)
      .build()
      .call({ body: JSON.stringify(dto) })
  },
  async deleteTerm(client: QueryClient, termUid: string) {
    return APIBuilder.delete(`/terms/${termUid}`)
      .withCredentials(client)
      .build()
      .call()
  },
  async deleteBatchTerm(client: QueryClient, dto: DeleteBatchDTO) {
    return APIBuilder.post('/terms/batch-delete')
      .withCredentials(client)
      .build()
      .call({ body: JSON.stringify(dto) })
  },
}
