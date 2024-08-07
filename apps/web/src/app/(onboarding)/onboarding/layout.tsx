import React, { PropsWithChildren } from 'react'
import { cookies } from 'next/headers'
import { userService } from '@vook-client/api'
import { redirect } from 'next/navigation'

import { getQueryClient } from '@/utils/react-query'

import { onboardingContainer, onboardingLayout } from './layout.css'
import { OnBoardingProvider } from './_context/useOnboarding'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()

  const accessToken = cookieStore.get('access')?.value
  const refreshToken = cookieStore.get('refresh')?.value

  if (!accessToken || !refreshToken) {
    redirect('/login')
  }

  const queryClient = getQueryClient()

  queryClient.setQueryData(['access'], accessToken)
  queryClient.setQueryData(['refresh'], refreshToken)

  let userInfo

  try {
    userInfo = await userService.userInfo(queryClient)
  } catch {
    redirect('/login')
  }

  if (userInfo.result.onboardingCompleted) {
    redirect('/workspace')
  }

  return (
    <OnBoardingProvider>
      <div className={onboardingLayout}>
        <div className={onboardingContainer}>{children}</div>
      </div>
    </OnBoardingProvider>
  )
}

export default Layout
