import React, { PropsWithChildren } from 'react'
import { userInfoService } from '@vook-client/api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { UserStatus } from 'node_modules/@vook-client/api/src/services/useUserInfoQuery/model'

import { loginLayout } from './layout.css'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()

  const accessToken = cookieStore.get('access')?.value
  const refreshToken = cookieStore.get('access')?.value

  if (!accessToken || !refreshToken) {
    return <div className={loginLayout}>{children}</div>
  }

  const userInfo = await userInfoService.getUserInfo({
    access: accessToken || '',
    refresh: refreshToken || '',
  })

  if (userInfo.result.status === UserStatus.SocialLoginCompleted) {
    redirect('/signup')
  }

  return null
}

export default Layout
