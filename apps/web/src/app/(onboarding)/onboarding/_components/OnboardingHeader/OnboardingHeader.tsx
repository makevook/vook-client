import { Step, Text } from '@vook-client/design-system'

import { onboardingHeader, stepArea } from './OnboardingHeader.css'

interface OnboardingHeaderProps {
  step: number
}

export const OnboardingHeader = ({ step }: OnboardingHeaderProps) => {
  return (
    <div>
      <div className={stepArea}>
        <Step current={step} total={2} />
      </div>
      <div className={onboardingHeader}>
        <Text type="body-1" color="semantic-primary-normal" fontWeight="medium">
          Onboarding
        </Text>
      </div>
    </div>
  )
}
