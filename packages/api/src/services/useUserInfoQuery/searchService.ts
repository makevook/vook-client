import Cookies from 'js-cookie'

import { baseFetcher } from '../..'

import { UserInfoResponse } from './model'

export const userInfoService = {
  async getUserInfo() {
    return baseFetcher.get<UserInfoResponse>('/user/info', {
      headers: {
        Authorization: Cookies.get('access') || '',
      },
    })
  },
}
