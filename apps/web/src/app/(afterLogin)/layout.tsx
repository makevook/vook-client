import { PropsWithChildren } from 'react'
import { UserInfoResponse, userService, UserStatus } from '@vook-client/api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { UserProvider } from '@/store/user'
import { getQueryClient } from '@/utils/react-query'
import { SilentRefresh } from '@/components/SilentRefresh/SilentRefresh'
import { SearchBox, SearchHistoryProvider } from '@/components/SearchBox'

import { mainArea } from './layout.css'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()

  const access = cookieStore.get('access')?.value || ''
  const refresh = cookieStore.get('refresh')?.value || ''

  if (!access || !refresh) {
    redirect('/login')
  }

  const queryClient = getQueryClient()

  queryClient.setQueryData(['access'], access)
  queryClient.setQueryData(['refresh'], refresh)

  let user: UserInfoResponse

  try {
    user = await userService.userInfo(queryClient)
  } catch {
    redirect('/login')
  }

  if (user.result.onboardingCompleted === false) {
    redirect('/onboarding')
  }

  if (user.result.status !== UserStatus.Registered) {
    redirect('/signup')
  }

  const dehydrateState = dehydrate(queryClient)

  return (
    <div className={mainArea}>
      <HydrationBoundary state={dehydrateState}>
        <UserProvider user={user.result}>
          <Header>
            <SearchHistoryProvider>
              <SearchBox />
            </SearchHistoryProvider>
          </Header>
          <Sidebar />
          {children}
        </UserProvider>
        <SilentRefresh />
      </HydrationBoundary>
    </div>
  )
}

export default Layout
