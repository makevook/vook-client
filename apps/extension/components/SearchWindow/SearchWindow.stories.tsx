import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { SearchWindow } from './SearchWindow'

const meta = {
  title: 'SearchWindow',
  component: SearchWindow,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          height: '600px',
        }}
      >
        <QueryClientProvider client={new QueryClient()}>
          <Story />
        </QueryClientProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof SearchWindow>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
