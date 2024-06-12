import {
  AppRouterContext,
  type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { SignUpForm } from './SignUpForm'

const meta: Meta<typeof SignUpForm> = {
  title: 'SignUpForm',
  parameters: {
    layout: 'centered',
  },
  component: SignUpForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppRouterContext.Provider value={{} as AppRouterInstance}>
        <QueryClientProvider client={new QueryClient()}>
          <div style={{ width: 400 }}>
            <Story />
          </div>
        </QueryClientProvider>
      </AppRouterContext.Provider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
