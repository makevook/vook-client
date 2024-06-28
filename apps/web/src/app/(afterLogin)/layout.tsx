import { PropsWithChildren } from 'react'
import { userService, UserStatus, vocabularyService } from '@vook-client/api'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { UserProvider } from '@/store/user'
import { getQueryClient } from '@/utils/react-query'
import { SilentRefresh } from '@/components/SilentRefresh/SilentRefresh'
import { WorkspaceProvider } from '@/store/workspace'

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
  const workspace = await vocabularyService.getVocabularyInfo(queryClient)

  const vocabularyID = 'default'
  const dehydrateState = dehydrate(queryClient)

  return (
    <div className={mainArea}>
      <HydrationBoundary state={dehydrateState}>
        <UserProvider user={user.result}>
          <WorkspaceProvider workspace={workspace.result}>
            <Header vocabularyID={vocabularyID} />
            <Sidebar />
            {children}
            {/* <Footer /> */}
          </WorkspaceProvider>
        </UserProvider>
        <SilentRefresh />
      </HydrationBoundary>
    </div>
  )
}

export default Layout
