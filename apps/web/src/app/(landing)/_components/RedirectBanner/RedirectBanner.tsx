import React from 'react'
import { Button, Text } from '@vook-client/design-system'
import Link from 'next/link'

import { redirectBanner } from './RedirectBanner.css'

export const RedirectBanner = () => {
  return (
    <div className={redirectBanner}>
      <Text type="title-1" fontWeight="bold" color="common-black">
        나만의 용어집으로 IT 용어를 효율적으로 관리하세요
      </Text>
      <Link href="/login">
        <Button>무료로 시작하기</Button>
      </Link>
    </div>
  )
}
