import React from 'react'
import { Icon, Text } from '@vook-client/design-system'

import { Hyperlink, Logo } from '../common/Common'

import {
  flexAlignCenter,
  footer,
  footerContainer,
  footerEmail,
  footerPolicy,
  footerRow,
  inner,
} from './Layout.css'

const FooterIcons = () => (
  <div className={flexAlignCenter}>
    <Hyperlink url="https://www.threads.net/@vook_help/">
      <Icon name="threads" />
    </Hyperlink>
    <Hyperlink url="https://www.instagram.com/vook_help/">
      <Icon name="instagram" />
    </Hyperlink>
    <Hyperlink url="https://vook.tistory.com/">
      <Icon name="blog" />
    </Hyperlink>
  </div>
)

export const Footer = () => (
  <footer className={footer}>
    <div className={inner}>
      <div className={footerContainer}>
        <div className={footerRow}>
          <Logo />
          <div className={footerPolicy}>
            <Text type="body-1">
              <a target="_blank" href="/terms/use">
                서비스 이용 약관
              </a>
            </Text>
            <Text type="body-1" fontWeight="bold">
              <a target="_blank" href="/terms/privacy">
                개인정보처리방침
              </a>
            </Text>
          </div>
        </div>

        <div className={footerRow}>
          <div className={footerEmail}>
            <Text
              color="semantic-label-neutral"
              fontWeight="regular"
              type="body-1"
            >
              부크(Vook)
            </Text>
            {' | '}
            <Text
              color="semantic-label-neutral"
              fontWeight="regular"
              type="body-1"
            >
              이메일 vook.help@gmail.com
            </Text>
          </div>
          <FooterIcons />
        </div>
      </div>
    </div>
  </footer>
)
