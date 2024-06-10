import React from 'react'
import { SymbolLogo, TypoLogo } from '@vook-client/design-system'

import { flexAlignCenter } from '../layout/Layout.css'

export const Logo = () => (
  <div className={flexAlignCenter}>
    <SymbolLogo size={24} />
    <TypoLogo size="small" />
  </div>
)

export const Hyperlink = ({
  url,
  children,
}: {
  url: string
  children: React.ReactNode
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)
