'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@vook-client/design-system'

import { Logo } from '../common'

import { header, headerContainer, inner } from './Layout.css'

enum Browser {
  Chrome,
  Safari,
  Edge,
  Firefox,
  Other,
}

const detectBrowser = (): Browser => {
  const userAgent = navigator.userAgent

  if (/Edg/.test(userAgent)) {
    return Browser.Edge
  } else if (/Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
    return Browser.Chrome
  } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    return Browser.Safari
  } else if (/Firefox/.test(userAgent)) {
    return Browser.Firefox
  } else {
    return Browser.Other
  }
}

export const Header = () => {
  const [browser, setBrowser] = useState<Browser | null>(null)

  useEffect(() => {
    setBrowser(detectBrowser())
  }, [])

  const renderBrowserSpecificComponent = () => {
    switch (browser) {
      case Browser.Chrome:
        return <Button size="small">Download</Button>
      // 필요한 경우 다른 브라우저에 대한 컴포넌트 추가
      default:
        return null
    }
  }

  return (
    <div className={header}>
      <div className={inner}>
        <div className={headerContainer}>
          <Logo />
          {renderBrowserSpecificComponent()}
        </div>
      </div>
    </div>
  )
}
