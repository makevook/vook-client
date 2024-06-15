import type { Meta, StoryObj } from '@storybook/react'
import { UserStatus } from '@vook-client/api'

import { ModalContextProvider } from '@/hooks/useModal/useModal'
import { UserProvider } from '@/store/user'

import { ProfileEditForm } from './ProfileEditForm'

const meta = {
  title: 'Auth/ProfileEditForm',
  component: ProfileEditForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProfileEditForm>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <ModalContextProvider>
          <UserProvider
            user={{
              uid: 'uid',
              nickname: 'nickname',
              status: UserStatus.Registered,
              email: 'test@vook.com',
              onboardingCompleted: false,
            }}
          >
            <Story />
          </UserProvider>
        </ModalContextProvider>
      </div>
    ),
  ],
}
