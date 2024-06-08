import type { Meta, StoryObj } from '@storybook/react'

import { ToggleButton } from './ToggleButton'

const meta = {
  title: 'ToggleButton',
  component: ToggleButton,
  args: {
    position: { x: 10, y: 10 },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButton>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
