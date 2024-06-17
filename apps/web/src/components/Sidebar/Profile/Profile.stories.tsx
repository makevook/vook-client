import { Meta, StoryObj } from '@storybook/react'
import { UserStatus } from '@vook-client/api'

import { Profile } from './Profile'

const meta: Meta<typeof Profile> = {
  title: 'GNB/Profile',
  component: Profile,
  args: {
    user: {
      uid: 'string',
      email: 'test@vook.com',
      status: UserStatus.Registered,
      onboardingCompleted: false,
      nickname: 'Nickname',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 600,
          height: 600,

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: 260 }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Profile>

export const Preview: Story = {}
