'use client'

import { userInfoService } from '@vook-client/api'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { UserStatus } from 'node_modules/@vook-client/api/src/services/useUserInfoQuery/model'
import { useEffect } from 'react'

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

  useEffect(() => {
    Cookies.set('access', access, {
      secure: true,
    })
    Cookies.set('refresh', refresh, {
      secure: true,
    })

    const checkUserRegistered = async () => {
      const userInfo = await userInfoService.getUserInfo({
        access,
        refresh,
      })
      const isRegistered = userInfo.result.status === UserStatus.Registered

      if (isRegistered) {
        router.push('/')
        return
      }
      router.push('/signup')
    }

    checkUserRegistered()
  }, [access, refresh, router])

  return null
}

export default AuthCallbackPage
