import { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from '.'

const meta = {
  title: 'Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof Sidebar>

export const Preview: Story = {}
