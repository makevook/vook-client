import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'GNB/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
