import {
  AppRouterContext,
  type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { OnBoardingProvider } from '../_context/useOnboarding'

import OnboardingJobPage from './page'

const meta: Meta<typeof OnboardingJobPage> = {
  title: 'OnboardingJob',
  component: OnboardingJobPage,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <AppRouterContext.Provider value={{} as AppRouterInstance}>
        <QueryClientProvider client={new QueryClient()}>
          <OnBoardingProvider>
            <Story />
          </OnBoardingProvider>
        </QueryClientProvider>
      </AppRouterContext.Provider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
