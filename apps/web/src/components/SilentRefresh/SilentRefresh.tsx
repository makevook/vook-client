/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import { useQueryClient } from '@tanstack/react-query'
import {
  ACCESS_TOKEN_HEADER_KEY,
  REFRESH_TOKEN_HEADER_KEY,
} from '@vook-client/api'
import Cookies from 'js-cookie'

export const SilentRefresh = () => {
  const queryClient = useQueryClient()
  queryClient.setQueryData(['tmp'], 1)

  setInterval(
    () => {
      const refresh = async () => {
        const refreshToken = queryClient.getQueryData<string>(['refresh'])

        if (!refreshToken) {
          return
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
          {
            headers: {
              'Content-Type': 'application/json',
              [REFRESH_TOKEN_HEADER_KEY]: refreshToken,
            },
          },
        )

        const newAccess = res.headers.get(ACCESS_TOKEN_HEADER_KEY)
        const newRefresh = res.headers.get(REFRESH_TOKEN_HEADER_KEY)

        if (!newAccess || !newRefresh) {
          return
        }

        queryClient.setQueryData(['access'], newAccess)
        queryClient.setQueryData(['refresh'], newRefresh)
        Cookies.set('access', newAccess)
        Cookies.set('refresh', newRefresh)
      }

      refresh()
    },
    1000 * 60 * 30,
  )

  return null
}
