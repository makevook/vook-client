import React, { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/Sidebar'

import { mainArea } from './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={mainArea}>
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout
