import Cookies from 'js-cookie'

import { baseFetcher } from '../..'
import { Tokens } from '../../shared/type'

import { UserInfoResponse } from './model'

export const userInfoService = {
  async getUserInfo(tokens?: Tokens) {
    if (!tokens) {
      return baseFetcher.get<UserInfoResponse>('/user/info', {
        headers: {
          Authorization: Cookies.get('access') || '',
          'X-Refresh-Token': Cookies.get('refresh') || '',
        },
      })
    }

    return baseFetcher.get<UserInfoResponse>('/user/info', {
      headers: {
        Authorization: tokens.access || '',
        'X-Refresh-Token': tokens.refresh || '',
      },
    })
  },
}
