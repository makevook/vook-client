import { Button, Text } from '@vook-client/design-system'
import Link from 'next/link'
import React from 'react'

import { buttonGroup, header } from './page.css'

const FunnelPage = () => {
  return (
    <div>
      <div className={header}>
        <Text
          as="h1"
          type="title-2"
          fontWeight="bold"
          color="semantic-label-normal"
        >
          Vook를 알게 된 경로를 알려주세요.
        </Text>
      </div>
      <div className={buttonGroup}>
        <Link href="/onboarding/job">
          <Text type="body-2" color="label-alternative">
            건너뛰기
          </Text>
        </Link>
        <Link href="/onboarding/job">
          <Button size="middle">다음</Button>
        </Link>
      </div>
    </div>
  )
}

export default FunnelPage
