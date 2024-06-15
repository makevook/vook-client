import { delay, http, HttpResponse } from 'msw'

import { API_URL } from '../config'
import { UserInfoResponse, UserStatus } from '../../services/user/model'

export const userHandlers = [
  http.get(`${API_URL}/user/info`, () => {
    const res: UserInfoResponse = {
      code: '202',
      result: {
        uid: 'uid',
        email: 'dummyuser1234@vook.com',
        status: UserStatus.Registered,
        onboardingCompleted: false,
        nickname: 'John Doe',
      },
    }
    return HttpResponse.json(res)
  }),
  http.put(`${API_URL}/user/info`, async () => {
    const res = {
      code: '202',
    }
    await delay(1000)
    return HttpResponse.json(res)
  }),

  http.post(`${API_URL}/user/register`, async () => {
    const res = {
      code: 'SUCCESS',
    }
    await delay(1000)
    return HttpResponse.json(res)
  }),
  http.post(`${API_URL}/user/onboarding`, async () => {
    const res = {
      code: 'SUCCESS',
    }
    await delay(1000)
    return HttpResponse.json(res)
  }),
  http.post(`${API_URL}/user/withdraw`, async () => {
    const res = {
      code: 'SUCCESS',
    }
    await delay(1000)
    return HttpResponse.json(res)
  }),
]
