import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import {
  WorkspaceCreateDTO,
  WorkspaceEditDTO,
  WorkspaceInfoResponse,
} from './model'

export const workspaceService = {
  async getWorkspaceInfo(client: QueryClient) {
    return APIBuilder.get('/vocabularies')
      .withCredentials(client)
      .build()
      .call<WorkspaceInfoResponse>()
  },
  async editWorkspaceInfo(
    client: QueryClient,
    uid: string,
    dto: WorkspaceEditDTO,
  ) {
    return APIBuilder.put(`/vocabularies/${uid}`)
      .withCredentials(client)
      .build()
      .call<WorkspaceInfoResponse>({ body: JSON.stringify(dto) })
  },
  async deletetWorkspaceInfo(client: QueryClient, uid: string) {
    return APIBuilder.delete(`/vocabularies/${uid}`)
      .withCredentials(client)
      .build()
      .call<WorkspaceInfoResponse>()
  },
  async createWorkspaceInfo(client: QueryClient, dto: WorkspaceCreateDTO) {
    return APIBuilder.post('/vocabularies')
      .withCredentials(client)
      .build()
      .call<WorkspaceInfoResponse>({ body: JSON.stringify(dto) })
  },
}
