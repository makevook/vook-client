import { Meta, StoryObj } from '@storybook/react'

import { Step } from './Step'

const meta = {
  title: 'Step',
  component: Step,
  tags: ['autodocs'],
  args: {
    current: 1,
    total: 10,
  },
  argTypes: {
    current: {
      type: 'number',
      description: '현재 스텝',
    },
    total: {
      type: 'number',
      description: '총 스텝',
    },
  },
} satisfies Meta<typeof Step>

export default meta

type Story = StoryObj<typeof Step>

export const Playground: Story = {}
