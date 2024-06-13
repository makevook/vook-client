import { PropsWithChildren } from 'react'

import { termsLayout } from './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={termsLayout}>{children}</div>
}

export default Layout
