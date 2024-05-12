import type { Meta, StoryObj } from '@storybook/react'

import { TestComponent } from './TestComponent'

const meta = {
  title: 'TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TestComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
