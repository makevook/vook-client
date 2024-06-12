import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { OnBoardingProvider } from '../_context/useOnboarding'

import OnboardingFunnel from './page'

const meta = {
  title: 'OnboardingFunnel',
  component: OnboardingFunnel,
  parameters: {
    layout: 'centered',
    msw: {},
  },
} satisfies Meta<typeof OnboardingFunnel>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  decorators: [
    (Story) => (
      <OnBoardingProvider>
        <Story />
      </OnBoardingProvider>
    ),
  ],
}
