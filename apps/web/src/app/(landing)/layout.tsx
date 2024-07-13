import { PropsWithChildren } from 'react'
import { Button } from '@vook-client/design-system'

import { Header } from '@/components/Header'

import { landingLayout } from './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header full={false}>
        <Button>버튼</Button>
      </Header>
      <div className={landingLayout}>{children}</div>
    </div>
  )
}

export default Layout
