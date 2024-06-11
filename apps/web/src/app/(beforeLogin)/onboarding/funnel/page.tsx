import {
  Button,
  ButtonProps,
  SelectBox,
  Text,
} from '@vook-client/design-system'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { OnboardingFunnel } from '@vook-client/api'

import { appearBottom } from '@/styles/animations.css'

import { SelectBoxGroup } from '../_components/SelectBoxGroup'

import { buttonGroup, funnelGroup, header } from './page.css'

const FUNNELS: Array<{
  icon: ButtonProps['prefixIcon']
  content: string
  value: OnboardingFunnel
}> = [
  {
    icon: 'X',
    content: '엑스',
    value: OnboardingFunnel.X,
  },
  {
    icon: 'facebook',
    content: '페이스북',
    value: OnboardingFunnel.FACEBOOK,
  },
  {
    icon: 'linkedin',
    content: '링크드인',
    value: OnboardingFunnel.LINKEDIN,
  },
  {
    icon: 'instagram-color',
    content: '인스타그램',
    value: OnboardingFunnel.INSTAGRAM,
  },
  {
    icon: 'blog-color',
    content: '네이버 블로그',
    value: OnboardingFunnel.BLOG,
  },
  {
    icon: 'silhouette',
    content: '친구/지인 추천',
    value: OnboardingFunnel.RECOMMENDATION,
  },
  {
    icon: 'speech-bulloon',
    content: '기타',
    value: OnboardingFunnel.OTHER,
  },
]

const FunnelPage = () => {
  return (
    <div>
      <div className={clsx(header, appearBottom)}>
        <Text
          as="h1"
          type="title-2"
          fontWeight="bold"
          color="semantic-label-normal"
        >
          Vook를 알게 된 경로를 알려주세요.
        </Text>
      </div>
      <div className={funnelGroup}>
        <SelectBoxGroup>
          {FUNNELS.map(({ icon, content }) => (
            <SelectBox key={content} prefixIcon={icon}>
              {content}
            </SelectBox>
          ))}
        </SelectBoxGroup>
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
