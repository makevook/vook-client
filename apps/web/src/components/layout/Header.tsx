'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@vook-client/design-system'

import { Logo } from '../common'

import { displayNone, header, headerContainer, inner } from './Layout.css'

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
        <div className={headerContainer}>
          <Logo />
          <div id="chrome-only-element" className={isChrome ? '' : displayNone}>
            <Button size="small">Download</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
