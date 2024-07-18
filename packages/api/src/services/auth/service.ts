import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import { SignUpResponse, SignUpDTO } from './model'

export const authService = {
  async register(client: QueryClient, dto: SignUpDTO) {
    return APIBuilder.post('/user/register')
      .withCredentials(client)
      .build()
      .call<SignUpResponse>({
        body: JSON.stringify(dto),
      })
  },

  async reRegister(client: QueryClient, dto: SignUpDTO) {
    return APIBuilder.post('/user/re-register')
      .withCredentials(client)
      .build()
      .call<SignUpResponse>({
        body: JSON.stringify(dto),
      })
  },

  async withdraw(client: QueryClient) {
    return APIBuilder.post('/user/withdraw')
      .withCredentials(client)
      .build()
      .call<unknown>()
  },
}
