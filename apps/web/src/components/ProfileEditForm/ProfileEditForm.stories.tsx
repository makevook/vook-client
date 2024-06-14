import type { Meta, StoryObj } from '@storybook/react'

import { ModalContextProvider } from '@/hooks/useModal/useModal'

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
          <Story />
        </ModalContextProvider>
      </div>
    ),
  ],
}
