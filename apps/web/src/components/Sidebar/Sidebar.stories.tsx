import { Meta, StoryObj } from '@storybook/react'
import { UserStatus } from '@vook-client/api'

import { HEADER_HEIGHT } from '@/styles/layout'

import { Sidebar } from '.'

const meta: Meta<typeof Sidebar> = {
  title: 'GNB/Sidebar',
  component: Sidebar,
  args: {
    user: {
      uid: 'string',
      email: 'test@vook.com',
      status: UserStatus.Registered,
      onboardingCompleted: false,
      nickname: 'nickname',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ transform: `translate(0, -${HEADER_HEIGHT + 10}px)` }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Preview: Story = {}
