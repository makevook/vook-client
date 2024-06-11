import { Button, Text } from '@vook-client/design-system'
import Link from 'next/link'
import React from 'react'

import { buttonGroup, header } from './page.css'

const JobPage = () => {
  return (
    <div>
      <div className={header}>
        <Text
          as="h1"
          type="title-2"
          fontWeight="bold"
          color="semantic-label-normal"
        >
          선택한 직업에 맞춰 기본 용어집을 생성합니다.
        </Text>
      </div>
      <div className={buttonGroup}>
        <Link href="/">
          <Text type="body-2" color="label-alternative">
            건너뛰기
          </Text>
        </Link>
        <Link href="/onboarding/funnel">
          <Button filled={false} blueLine={false} size="middle">
            뒤로가기
          </Button>
        </Link>
        <Link href="/onboarding/job">
          <Button size="middle" disabled>
            시작하기
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default JobPage
