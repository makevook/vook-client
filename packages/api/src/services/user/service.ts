import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import {
  OnboardingDTO,
  OnboardingResponse,
  UserEditDTO,
  UserEditResponse,
  UserInfoResponse,
} from './model'

export const userService = {
  async userInfo(client: QueryClient) {
    return APIBuilder.get('/user/info')
      .withCredentials(client)
      .build()
      .call<UserInfoResponse>()
  },

  async editUser(client: QueryClient, dto: UserEditDTO) {
    return APIBuilder.put('/user/info')
      .withCredentials(client)
      .build()
      .call<UserEditResponse>({
        body: JSON.stringify(dto),
      })
  },

  async onboarding(client: QueryClient, dto: OnboardingDTO) {
    return APIBuilder.post('/user/onboarding')
      .withCredentials(client)
      .build()
      .call<OnboardingResponse>({
        body: JSON.stringify(dto),
      })
  },
}
