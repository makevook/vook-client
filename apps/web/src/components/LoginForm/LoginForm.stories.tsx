import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'

const meta = {
  title: 'LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
}
