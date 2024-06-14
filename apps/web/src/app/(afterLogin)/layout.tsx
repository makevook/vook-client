'use client'

import { PropsWithChildren } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'

import { mainArea } from './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  const [, segment] = useSelectedLayoutSegments()

  return (
    <div className={mainArea}>
      <Header vocabularyID={segment || 'default'} />
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout
