import React from 'react'
import { Icon } from '@vook-client/design-system'

import { Hyperlink, Logo } from '../common/Common'

import {
  flexAlignCenter,
  flexEnd,
  footer,
  footerContainer,
  footerLine,
  inner,
} from './Layout.css'

const FooterIcons = () => (
  <div className={flexAlignCenter}>
    <Hyperlink url="https://www.instagram.com/yong4.zip/">
      <Icon name="instagram" />
    </Hyperlink>
    <Hyperlink url="https://vook.tistory.com/">
      <Icon name="blog" />
    </Hyperlink>
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
