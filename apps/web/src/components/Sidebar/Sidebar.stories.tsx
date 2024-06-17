import { Meta, StoryObj } from '@storybook/react'
import { UserStatus } from '@vook-client/api'

import { HEADER_HEIGHT } from '@/styles/layout'
import { UserProvider, UserState } from '@/store/user'

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
    (Story, _ctx) => {
      const ctx = _ctx as unknown as { args: { user: UserState['user'] } }
      return (
        <div style={{ transform: `translate(0, -${HEADER_HEIGHT + 10}px)` }}>
          <UserProvider user={ctx.args.user}>
            <Story />
          </UserProvider>
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Preview: Story = {}
