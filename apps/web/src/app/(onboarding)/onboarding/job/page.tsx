'use client'

import {
  Button,
  ButtonProps,
  SelectBox,
  Text,
} from '@vook-client/design-system'
import React from 'react'
import { OnboardingJob, useOnboardingMutation } from '@vook-client/api'
import { useRouter } from 'next/navigation'

import { Link } from '@/components/Link'

import { SelectBoxGroup } from '../_components/SelectBoxGroup'
import { useOnBoarding } from '../_context/useOnboarding'
import { OnboardingHeader } from '../_components/OnboardingHeader'

import { buttonGroup, header, jobGroup } from './page.css'

const JOBS: Array<{
  icon: ButtonProps['prefixIcon']
  content: string
  job: OnboardingJob
}> = [
  {
    icon: 'pencil',
    content: '기획자',
    job: OnboardingJob.PLANNER,
  },
  {
    icon: 'artist-pallete',
    content: '디자이너',
    job: OnboardingJob.DESIGNER,
  },
  {
    icon: 'laptop',
    content: '개발자',
    job: OnboardingJob.DEVELOPER,
  },
  {
    icon: 'light-bulb',
    content: '마케터',
    job: OnboardingJob.MARKETER,
  },
  {
    icon: 'sunglass',
    content: 'CEO',
    job: OnboardingJob.CEO,
  },
  {
    icon: 'sparkles',
    content: 'HR',
    job: OnboardingJob.HR,
  },
  {
    icon: 'speech-bulloon',
    content: '기타',
    job: OnboardingJob.OTHER,
  },
]

const OnboardingJobPage = () => {
  const router = useRouter()
  const { setJob, job: selectedJob, funnel } = useOnBoarding()

  const mutation = useOnboardingMutation(
    {
      funnel,
      job: selectedJob,
    },
    {
      onSuccess: () => {
        router.push('/')
      },
    },
  )

  const onSubmitFunnel = () => {
    mutation.mutate()
  }

  const onClickJob = (job: OnboardingJob) => {
    if (job === selectedJob) {
      setJob(null)
      return
    }

    setJob(job)
  }

  return (
    <div>
      <OnboardingHeader step={2} />
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
          {JOBS.map(({ icon, content, job }) => (
            <SelectBox
              onClick={() => onClickJob(job)}
              key={content}
              prefixIcon={icon}
              selected={job === selectedJob}
            >
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
          <Button
            onClick={onSubmitFunnel}
            size="middle"
            disabled={
              selectedJob === null || mutation.isPending || mutation.isSuccess
            }
            suffixIcon={
              mutation.isPending || mutation.isSuccess
                ? 'spinner-medium'
                : undefined
            }
          >
            시작하기
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default OnboardingJobPage
