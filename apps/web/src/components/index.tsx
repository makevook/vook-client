import React, { useEffect, useState } from 'react'
import { Button, Icon, Text } from '@vook-client/design-system'

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
  loadingWrapper,
  logo,
  noTermContainer,
  spinner,
} from './index.css'

const Logo = () => (
  <div className={logo}>
    <Icon name="symbol" />
    <Icon name="typo" size="typo" />
  </div>
)

const FooterIcons = () => (
  <div className={footerIcon}>
    <a
      href="https://www.instagram.com/yong4.zip/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="instagram" size="footer" isClick />
    </a>
    <a
      href="https://vook.tistory.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="blog" size="footer" isClick />
    </a>
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
export const Header = () => {
  const [isChrome, setIsChrome] = useState(false)

  useEffect(() => {
    setIsChrome(
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    )
  }, [])

  return (
    <div className={header}>
      <div className={inner}>
        <div className={flexBetween}>
          <Logo />
          <div id="chrome-only-element" className={isChrome ? chromeOnly : ''}>
            <Button size="small">Download</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// 로딩 상태 컴포넌트
export const LoadingComponent = () => (
  <div className={noTermContainer}>
    <div className={loadingWrapper}>
      <div className={spinner} />
    </div>
  </div>
)

// 검색 결과 없음 컴포넌트
export const NoSearchResults = () => (
  <div className={noTermContainer}>
    <Text type="body-1" fontWeight="medium" color="semantic-label-alternative">
      검색된 용어가 없습니다.
    </Text>
    <Button size="small" filled={false} blueLine={false} name="plus">
      <a
        href="https://forms.gle/eqTF8wG1WzcY6wKF6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vook에 용어 추가하기
      </a>
    </Button>
  </div>
)
