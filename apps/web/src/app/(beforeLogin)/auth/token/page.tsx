'use client'

import { userService, UserStatus } from '@vook-client/api'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

interface AuthCallbackQueryParams {
  searchParams: {
    access: string
    refresh: string
  }
}

const AuthCallbackPage = ({
  searchParams: { access, refresh },
}: AuthCallbackQueryParams) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  useEffect(() => {
    Cookies.set('access', access, {
      secure: true,
    })
    Cookies.set('refresh', refresh, {
      secure: true,
    })
    queryClient.setQueryData(['access'], access)
    queryClient.setQueryData(['refresh'], refresh)

    const checkUserRegistered = async () => {
      const userInfo = await userService.userInfo(queryClient)
      const isRegistered = userInfo.result.status === UserStatus.Registered

      if (isRegistered) {
        router.push('/workspace')
        return
      }
      router.push('/signup')
    }

    checkUserRegistered()
  }, [access, queryClient, refresh, router])

  return null
}

export default AuthCallbackPage
