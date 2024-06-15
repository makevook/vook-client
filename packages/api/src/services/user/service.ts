import Cookies from 'js-cookie'

import { baseFetcher } from '../..'
import { Tokens } from '../../shared/type'

import {
  OnboardingDTO,
  OnboardingResponse,
  UserEditDTO,
  UserEditResponse,
  UserInfoResponse,
} from './model'

export const userService = {
  async userInfo(tokens: Tokens) {
    return baseFetcher.get<UserInfoResponse>('/user/info', {
      headers: {
        Authorization: tokens.access,
        'X-Refresh-Authorization': tokens.refresh,
      },
    })
  },

  async editUser(tokens: Tokens, dto: UserEditDTO) {
    return baseFetcher.put<UserEditResponse>('/user/info', {
      headers: {
        Authorization: tokens.access,
        'X-Refresh-Authorization': tokens.refresh,
      },
      body: JSON.stringify(dto),
    })
  },

  async onboarding(body: OnboardingDTO) {
    return baseFetcher.post<OnboardingResponse>('/user/onboarding', {
      headers: {
        Authorization: Cookies.get('access') || '',
      },
      body: JSON.stringify(body),
    })
  },
}
