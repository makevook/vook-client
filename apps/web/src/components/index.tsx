import React from 'react'
import { Button, Icon } from '@vook-client/design-system'

import {
  flexBetween,
  flexEnd,
  footer,
  footerContainer,
  footerIcon,
  footerLine,
  header,
  inner,
  linkStyle,
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
        <Button size="small">
          <a
            className={linkStyle}
            href="https://forms.gle/eqTF8wG1WzcY6wKF6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </Button>
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
