'use client'

import {
  Button,
  ButtonProps,
  SelectBox,
  Text,
} from '@vook-client/design-system'
import React, { useEffect } from 'react'
import { OnboardingJob, useOnboardingMutation } from '@vook-client/api'
import { useRouter } from 'next/navigation'

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
        router.push('/workspace')
      },
    },
  )

  useEffect(() => {
    window.onpopstate = () => {
      if (location.pathname === '/onboarding/job') {
        alert('뒤로가기를 통한 접근을 감지하여 페이지를 이동합니다.')
        router.push('/workspace')
      }
    }
  }, [router])

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
          현재 하고 계신 직업을 선택해주세요.
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
      <div className={buttonGroup} style={{ cursor: 'pointer' }}>
        <Text type="body-2" color="label-alternative" onClick={onSubmitFunnel}>
          건너뛰기
        </Text>
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
      </div>
    </div>
  )
}

export default OnboardingJobPage
