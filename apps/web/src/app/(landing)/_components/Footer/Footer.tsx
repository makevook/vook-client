import React from 'react'
import { Icon, Text, TypoLogo } from '@vook-client/design-system'
import Link from 'next/link'

import { flexBox, flexBoxBetween, footerContainer } from './Footer.css'

const Footer = () => {
  return (
    <div className={footerContainer}>
      <div className={flexBoxBetween}>
        <Link href="/">
          <TypoLogo size="gray" />
        </Link>
        <div className={flexBox} style={{ gap: 24 }}>
          <Link href="/terms/use">
            <Text type="body-1">서비스이용약관</Text>
          </Link>
          <Link href="/terms/privacy">
            <Text type="body-1" fontWeight="bold">
              개인정보처리방침
            </Text>
          </Link>
        </div>
      </div>
      <div className={flexBoxBetween} style={{ padding: '0px 4px' }}>
        <div className={flexBox} style={{ gap: 8 }}>
          <Text type="body-1" color="semantic-label-assistive">
            부크(Vook)
          </Text>
          <Text type="body-1" color="semantic-label-assistive">
            |
          </Text>
          <Text type="body-1" color="semantic-label-assistive">
            이메일 vook.help@gmail.com
          </Text>
        </div>
        <div className={flexBox} style={{ gap: 4 }}>
          <Link href="https://www.instagram.com/yong4.zip/">
            <Icon name="instagram" />
          </Link>
          <Link href="https://vook.tistory.com/">
            <Icon name="blog" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
