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

  if (!access || !refresh) {
    router.push('/login')
  }

  useEffect(() => {
    Cookies.set('access', access, {
      secure: true,
      expires: new Date('2038-01-19T03:14:07.000Z'),
    })
    Cookies.set('refresh', refresh, {
      secure: true,
      expires: new Date('2038-01-19T03:14:07.000Z'),
    })
    queryClient.setQueryData(['access'], access)
    queryClient.setQueryData(['refresh'], refresh)

    const checkUserRegistered = async () => {
      const userInfo = await userService.userInfo(queryClient)

      if (userInfo.result.status === UserStatus.SocialLoginCompleted) {
        router.push('/signup')
        return
      }

      if (userInfo.result.status === UserStatus.Registered) {
        if (userInfo.result.onboardingCompleted) {
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
          return
        } else {
          router.push('/onboarding/funnel')
          return
        }
      }

      if (userInfo.result.status === UserStatus.Withdrawn) {
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
