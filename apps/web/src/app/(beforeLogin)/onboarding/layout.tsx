import React, { PropsWithChildren } from 'react'
import { cookies } from 'next/headers'
import { userInfoService } from '@vook-client/api'
import { redirect } from 'next/navigation'

import { onboardingContainer, onboardingLayout } from './layout.css'
import { OnBoardingProvider } from './_context/useOnboarding'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('access')?.value
  const userInfo = await userInfoService.getUserInfo(accessToken)

  if (userInfo.result.onboardingCompleted) {
    redirect('/')
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
