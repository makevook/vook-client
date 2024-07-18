import { TypoLogo } from '@vook-client/design-system'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

import { Link } from '../Link'

import { header, headerInner, headerInnerFull } from './Header.css'

interface HeaderProps extends PropsWithChildren {
  full?: boolean
}

export const Header = ({ children, full = true }: HeaderProps) => {
  return (
    <header className={header}>
      <div
        className={clsx({
          [headerInner]: true,
          [headerInnerFull]: full,
        })}
      >
        <div className="logo">
          <Link href="/workspace">
            <TypoLogo size="big" />
          </Link>
        </div>
        {children}
      </div>
    </header>
  )
}
