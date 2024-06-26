import { PropsWithChildren } from 'react'
import { userService, UserStatus } from '@vook-client/api'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { Footer } from '@/components/layout'
import { UserProvider } from '@/store/user'
import { getQueryClient } from '@/utils/react-query'
import { SilentRefresh } from '@/components/SilentRefresh/SilentRefresh'

import { mainArea } from './layout.css'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()
  const isAuthorization = headers().get('X-AuthConfirm')

  if (isAuthorization !== 'confirmed') {
    redirect('/login')
  }

  const access = cookieStore.get('access')?.value || ''
  const refresh = cookieStore.get('refresh')?.value || ''

  if (!access && !refresh) {
    redirect('/login')
  }

  const queryClient = getQueryClient()
  queryClient.setQueryData(['access'], access)
  queryClient.setQueryData(['refresh'], refresh)

  const user = await userService.userInfo(queryClient)

  if (user.result.status !== UserStatus.Registered) {
    redirect('/signup')
  }

  const vocabularyID = 'default'
  const dehydrateState = dehydrate(queryClient)

  return (
    <div className={mainArea}>
      <HydrationBoundary state={dehydrateState}>
        <UserProvider user={user.result}>
          <Header vocabularyID={vocabularyID} />
          <Sidebar />
          {children}
          <Footer />
        </UserProvider>
        <SilentRefresh />
      </HydrationBoundary>
    </div>
  )
}

export default Layout
