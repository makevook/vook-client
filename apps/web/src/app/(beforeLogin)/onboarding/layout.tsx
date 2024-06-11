'use client'

import React, { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import { Step, Text } from '@vook-client/design-system'

import { onboardingContainer, onboardingLayout, stepArea } from './layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()
  const step = pathname.includes('funnel') ? 1 : 2

  return (
    <div className={onboardingLayout}>
      <div className={onboardingContainer}>
        <div className={stepArea}>
          <Step current={step} total={2} />
        </div>
        <Text type="body-1" color="semantic-primary-normal" fontWeight="medium">
          Onboarding
        </Text>
        {children}
      </div>
    </div>
  )
}

export default Layout
