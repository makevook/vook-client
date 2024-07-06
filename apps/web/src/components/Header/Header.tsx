import { TypoLogo } from '@vook-client/design-system'

import { Link } from '../Link'
import { SearchBox, SearchHistoryProvider } from '../SearchBox'

import { header } from './Header.css'

export const Header = () => {
  return (
    <header className={header}>
      <div className="logo">
        <Link href="/">
          <TypoLogo size="big" />
        </Link>
      </div>
      <SearchHistoryProvider>
        <SearchBox />
      </SearchHistoryProvider>
    </header>
  )
}
