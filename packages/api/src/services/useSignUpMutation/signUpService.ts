import Cookies from 'js-cookie'

import { baseFetcher } from '../..'

import { SignUpResponse, SignUpDTO } from './model'

export const signUpService = {
  async register(body: SignUpDTO) {
    return baseFetcher.post<SignUpResponse>('/user/register', {
      headers: {
        Authorization: Cookies.get('access') || '',
      },
      body: JSON.stringify(body),
    })
  },
}
