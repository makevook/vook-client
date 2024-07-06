import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { OnBoardingProvider } from '../_context/useOnboarding'

import OnboardingJobPage from './page'

const meta: Meta<typeof OnboardingJobPage> = {
  title: 'Onboarding/Job',
  component: OnboardingJobPage,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <OnBoardingProvider>
        <Story />
      </OnBoardingProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
