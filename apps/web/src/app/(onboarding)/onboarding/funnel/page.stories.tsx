import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { OnBoardingProvider } from '../_context/useOnboarding'

import OnboardingFunnel from './page'

const meta: Meta<typeof OnboardingFunnel> = {
  title: 'OnboardingFunnel',
  component: OnboardingFunnel,
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
