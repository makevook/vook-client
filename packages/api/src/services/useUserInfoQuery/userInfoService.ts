import { baseFetcher } from '../..'
import { Tokens } from '../../shared/type'

import { UserInfoResponse } from './model'

export const userInfoService = {
  async getUserInfo(tokens: Tokens) {
    return baseFetcher.get<UserInfoResponse>('/user/info', {
      headers: {
        Authorization: tokens.access,
        'X-Refresh-Authorization': tokens.refresh,
      },
    })
  },
}
