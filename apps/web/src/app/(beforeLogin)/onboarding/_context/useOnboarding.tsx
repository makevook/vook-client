'use client'

import { OnboardingFunnel, OnboardingJob } from '@vook-client/api'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

interface OnBoardingContextType {
  funnel: OnboardingFunnel | null
  job: OnboardingJob | null
  setFunnel: (funnel: OnboardingFunnel | null) => void
  setJob: (job: OnboardingJob | null) => void
}

const onBoardingContext = createContext<OnBoardingContextType | undefined>(
  undefined,
)

export const OnBoardingProvider = ({ children }: PropsWithChildren) => {
  const [funnel, setFunnel] = useState<OnboardingFunnel | null>(null)
  const [job, setJob] = useState<OnboardingJob | null>(null)

  return (
    <onBoardingContext.Provider value={{ funnel, job, setFunnel, setJob }}>
      {children}
    </onBoardingContext.Provider>
  )
}

export const useOnBoarding = () => {
  const context = useContext(onBoardingContext)

  if (!context) {
    throw new Error(
      'useOnBoarding은 OnBoardingProvider 내에서 사용되어야 합니다.',
    )
  }

  return context
}
