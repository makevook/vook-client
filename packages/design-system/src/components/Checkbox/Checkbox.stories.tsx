import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    onChange: () => {},
    checked: true,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
  },
}
