import React from 'react'
import { Icon } from '@vook-client/design-system'

import { flexAlignCenter } from '../layout/Layout.css'

export const Logo = () => (
  <div className={flexAlignCenter}>
    <Icon name="symbol" />
    <Icon name="typo" size="typo" />
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
