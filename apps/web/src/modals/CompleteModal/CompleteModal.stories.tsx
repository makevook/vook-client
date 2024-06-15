import { Meta, StoryObj } from '@storybook/react'

import { ModalOpener } from '../utils/ModalOpener'

import { CompleteModal } from './CompleteModal'

const meta: Meta<typeof CompleteModal> = {
  title: 'Modal/CompleteModal',
  component: CompleteModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    completeMessage: '저장이 완료되었습니다.',
  },
  argTypes: {
    completeMessage: {
      control: { type: 'text' },
      description: '완료 메시지',
    },
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

type Story = StoryObj<typeof CompleteModal>

export const Preview: Story = {}
