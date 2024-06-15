import { PropsWithChildren } from 'react'
import { userService } from '@vook-client/api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { Footer } from '@/components/layout'
import { UserProvider } from '@/store/user'
import { getQueryClient } from '@/utils/react-query'

import { mainArea } from './layout.css'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()

  const access = cookieStore.get('access')?.value || ''
  const refresh = cookieStore.get('refresh')?.value || ''

  if (!access && !refresh) {
    redirect('/login')
  }

  const queryClient = getQueryClient()
  queryClient.setQueryData(['access'], access)
  queryClient.setQueryData(['refresh'], refresh)

  const user = await userService.userInfo(queryClient)
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
      </HydrationBoundary>
    </div>
  )
}

export default Layout
