import {
  Button,
  ButtonProps,
  SelectBox,
  Text,
} from '@vook-client/design-system'
import Link from 'next/link'
import React from 'react'
import { OnboardingJob } from '@vook-client/api'

import { SelectBoxGroup } from '../_components/SelectBoxGroup'

import { buttonGroup, header, jobGroup } from './page.css'

const JOBS: Array<{
  icon: ButtonProps['prefixIcon']
  content: string
  value: OnboardingJob
}> = [
  {
    icon: 'pencil',
    content: '기획자',
    value: OnboardingJob.PLANNER,
  },
  {
    icon: 'artist-pallete',
    content: '디자이너',
    value: OnboardingJob.DESIGNER,
  },
  {
    icon: 'laptop',
    content: '개발자',
    value: OnboardingJob.DEVELOPER,
  },
  {
    icon: 'light-bulb',
    content: '마케터',
    value: OnboardingJob.MARKETER,
  },
  {
    icon: 'sunglass',
    content: 'CEO',
    value: OnboardingJob.CEO,
  },
  {
    icon: 'sparkles',
    content: 'HR',
    value: OnboardingJob.HR,
  },
  {
    icon: 'speech-bulloon',
    content: '기타',
    value: OnboardingJob.OTHER,
  },
]

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
      <div className={jobGroup}>
        <SelectBoxGroup>
          {JOBS.map(({ icon, content }) => (
            <SelectBox key={content} prefixIcon={icon}>
              {content}
            </SelectBox>
          ))}
        </SelectBoxGroup>
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
