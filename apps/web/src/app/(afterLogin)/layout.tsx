import { PropsWithChildren } from 'react'
import { userInfoService } from '@vook-client/api'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { Footer } from '@/components/layout'

import { mainArea } from './layout.css'

const Layout = async ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('access')?.value
  const refreshToken = cookieStore.get('refresh')?.value

  const headerList = headers()

  if (!accessToken && !refreshToken) {
    redirect('/login')
  }

  const user = await userInfoService.getUserInfo({
    access: accessToken || '',
    refresh: refreshToken || '',
  })

  const vocabularyID = headerList.get('X-pathname')?.split('/')[2] || 'default'

  return (
    <div className={mainArea}>
      <Header vocabularyID={vocabularyID} />
      <Sidebar user={user.result} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
