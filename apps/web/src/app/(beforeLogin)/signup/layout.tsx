import { PropsWithChildren } from 'react'

import { loginLayout } from './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={loginLayout}>{children}</div>
}

export default Layout
