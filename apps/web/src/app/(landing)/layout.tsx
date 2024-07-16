import { PropsWithChildren } from 'react'
import { Button } from '@vook-client/design-system'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { Footer } from '@/components/layout'

import {
  headerButtonContainer,
  landingLayout,
  landingOverlay,
} from './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={landingOverlay}>
      <Header full={false}>
        <div className={headerButtonContainer}>
          <Link href="/login">
            <Button blueLine={false} filled={false}>
              로그인
            </Button>
          </Link>
          <Link href="/login">
            <Button style={{ background: '#000' }}>무료로 시작하기</Button>
          </Link>
        </div>
      </Header>
      <div className={landingLayout}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
