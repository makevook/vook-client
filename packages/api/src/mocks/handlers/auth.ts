import { http, HttpResponse } from 'msw'

import { API_URL } from '../config'

export const authHandlers = [
  http.get(`${API_URL}/auth/refresh`, () => {
    return new HttpResponse(null, {
      headers: {
        Authorization: 'Fake Access',
        'X-Refresh-Authorization': 'Fake Refresh',
      },
    })
  }),
]
