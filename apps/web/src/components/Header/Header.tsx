import { TypoLogo } from '@vook-client/design-system'
import { PropsWithChildren } from 'react'

import { Link } from '../Link'

import { header } from './Header.css'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className={header}>
      <div className="logo">
        <Link href="/">
          <TypoLogo size="big" />
        </Link>
      </div>
      {children}
    </header>
  )
}
