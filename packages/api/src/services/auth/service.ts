import Cookies from 'js-cookie'

import { baseFetcher } from '../..'

import { SignUpResponse, SignUpDTO } from './model'

export const authService = {
  async register(body: SignUpDTO) {
    return baseFetcher.post<SignUpResponse>('/user/register', {
      headers: {
        Authorization: Cookies.get('access') || '',
      },
      body: JSON.stringify(body),
    })
  },

  async withdraw() {
    return baseFetcher.post<void>('/user/withdraw', {
      headers: {
        Authorization: Cookies.get('access') || '',
      },
    })
  },
}
