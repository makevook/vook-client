import { delay, http, HttpResponse } from 'msw'

import { API_URL } from '../config'
import {
  OnboardingDTO,
  OnboardingResponse,
  UserEditDTO,
  UserEditResponse,
  UserInfoResponse,
  UserStatus,
} from '../../services/user/model'
import {
  SignUpDTO,
  SignUpResponse,
  UserWithdrawResponse,
} from '../../services/auth/model'

const user = {
  uid: 'b8baa3c7-7ad4-46b5-a85c-2405b9bc7095',
  email: 'johndoe1234@vook.com',
  status: UserStatus.Registered,
  onboardingCompleted: false,
  nickname: 'John Doe',
}

export const userHandlers = [
  http.get(`${API_URL}/auth/refresh`, () => {
    return new HttpResponse(null, {
      headers: {
        Authorization: 'Fake Access',
        'X-Refresh-Authorization': 'Fake Refresh',
      },
    })
  }),

  http.get<never, never, UserInfoResponse>(`${API_URL}/user/info`, () => {
    const res = {
      code: 'SUCCESS',
      result: user,
    }
    return HttpResponse.json(res)
  }),

  http.put<never, UserEditDTO, UserEditResponse>(
    `${API_URL}/user/info`,
    async ({ request }) => {
      const req = await request.json()

      const res = {
        code: 'SUCCESS',
      }

      user.nickname = req.nickname

      await delay(1000)
      return HttpResponse.json(res)
    },
  ),

  http.post<never, SignUpDTO, SignUpResponse>(
    `${API_URL}/user/register`,
    async () => {
      const res = {
        code: 'SUCCESS',
      }
      await delay(1000)
      return HttpResponse.json(res)
    },
  ),
  http.post<never, OnboardingDTO, OnboardingResponse>(
    `${API_URL}/user/onboarding`,
    async () => {
      const res = {
        code: 'SUCCESS',
      }
      await delay(1000)
      return HttpResponse.json(res)
    },
  ),
  http.post<never, never, UserWithdrawResponse>(
    `${API_URL}/user/withdraw`,
    async () => {
      const res = {
        code: 'SUCCESS',
      }
      await delay(1000)
      return HttpResponse.json(res)
    },
  ),
]
