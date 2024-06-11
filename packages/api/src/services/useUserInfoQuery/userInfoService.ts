import Cookies from 'js-cookie'

import { baseFetcher } from '../..'

import { UserInfoResponse } from './model'

export const userInfoService = {
  async getUserInfo(token?: string) {
    return baseFetcher.get<UserInfoResponse>('/user/info', {
      headers: {
        Authorization: token || Cookies.get('access') || '',
      },
    })
  },
}
