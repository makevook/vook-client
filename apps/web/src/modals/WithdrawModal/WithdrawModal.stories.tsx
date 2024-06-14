import { Meta, StoryObj } from '@storybook/react'

import { ModalOpener } from '../utils/ModalOpener'

import { WithdrawModal } from './WithdrawModal'

const meta: Meta<typeof WithdrawModal> = {
  title: 'Modal/WithdrawModal',
  component: WithdrawModal,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <ModalOpener />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof WithdrawModal>

export const Preview: Story = {}
