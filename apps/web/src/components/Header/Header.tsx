'use client'

import { TypoLogo } from '@vook-client/design-system'

import { Link } from '../Link'
import { SearchBox, SearchHistoryProvider } from '../SearchBox'

import { header } from './Header.css'

interface HeaderProps {
  vocabularyID: string
}

export const Header = ({ vocabularyID }: HeaderProps) => {
  return (
    <header className={header}>
      <div className="logo">
        <Link href="/">
          <TypoLogo size="big" />
        </Link>
      </div>
      <SearchHistoryProvider vocabularyID={vocabularyID}>
        <SearchBox />
      </SearchHistoryProvider>
    </header>
  )
}
