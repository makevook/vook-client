import React from 'react'
import { Button, Icon } from '@vook-client/design-system'

import {
  chromeOnly,
  flexBetween,
  flexEnd,
  footer,
  footerContainer,
  footerIcon,
  footerLine,
  header,
  inner,
  logo,
} from './index.css'

const Logo = () => (
  <div className={logo}>
    <Icon name="symbol" />
    <Icon name="typo" size="typo" />
  </div>
)

const FooterIcons = () => (
  <div className={footerIcon}>
    <Icon name="instagram" size="footer" isClick />
    <Icon name="blog" size="footer" isClick />
  </div>
)

export const Header = () => (
  <div className={header}>
    <div className={inner}>
      <div className={flexBetween}>
        <Logo />
        <div id="chrome-only-element" className={chromeOnly}>
          <Button size="small">Download</Button>
        </div>
      </div>
    </div>
  </div>
)

export const Footer = () => (
  <div className={footer}>
    <div className={inner}>
      <div className={footerContainer}>
        <Logo />
        <div>
          <div className={flexEnd}>
            <FooterIcons />
          </div>
          <hr className={footerLine} />
        </div>
      </div>
    </div>
  </div>
)
