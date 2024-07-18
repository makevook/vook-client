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
    window.postMessage(
      {
        from: 'vook-web',
        access,
        refresh,
      },
      '*',
    )
    queryClient.setQueryData(['access'], access)
    queryClient.setQueryData(['refresh'], refresh)

    const checkUserRegistered = async () => {
      const userInfo = await userService.userInfo(queryClient)
      const isRegistered = userInfo.result.status === UserStatus.Registered
      const isOnboardingCompleted = userInfo.result.onboardingCompleted

      if (!isOnboardingCompleted) {
        router.push('/onboarding/funnel')
        return
      }

      if (isRegistered && isOnboardingCompleted) {
        const sendToken = () => {
          window.postMessage(
            {
              from: 'vook-web',
              access,
              refresh,
            },
            '*',
          )
        }

        if (window.opener) {
          sendToken()
        }

        router.push('/workspace')
      }

      if (userInfo.result.onboardingCompleted) {
        router.push('/signup')
      }
    }

    checkUserRegistered()
  }, [access, queryClient, refresh, router])

  useEffect(() => {
    window.addEventListener(
      'message',
      (event: {
        data: {
          from: string
          content: string
        }
      }) => {
        if (
          event.data.from === 'vook-extension' &&
          event.data.content === 'success' &&
          window.opener
        ) {
          window.close()
        }
      },
    )
  }, [])

  return null
}

export default AuthCallbackPage
