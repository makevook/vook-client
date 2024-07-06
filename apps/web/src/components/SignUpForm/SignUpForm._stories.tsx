import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './SignUpForm'

const meta: Meta<typeof SignUpForm> = {
  title: 'Auth/SignUpForm',
  parameters: {
    layout: 'centered',
  },
  component: SignUpForm,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
