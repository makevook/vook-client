import { PropsWithChildren } from 'react'
import { userService } from '@vook-client/api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { Footer } from '@/components/layout'
import { UserProvider } from '@/store/user'

import { mainArea } from './layout.css'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('access')?.value
  const refreshToken = cookieStore.get('refresh')?.value

  if (!accessToken && !refreshToken) {
    redirect('/login')
  }

  const user = await userService.userInfo({
    access: accessToken || '',
    refresh: refreshToken || '',
  })

  const vocabularyID = 'default'

  return (
    <div className={mainArea}>
      <UserProvider user={user.result}>
        <Header vocabularyID={vocabularyID} />
        <Sidebar />
        {children}
        <Footer />
      </UserProvider>
    </div>
  )
}

export default Layout
