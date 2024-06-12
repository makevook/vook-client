import type { Meta, StoryObj } from '@storybook/react'

import { SearchWindow } from './SearchWindow'

const meta = {
  title: 'SearchWindow',
  component: SearchWindow,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          height: '600px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchWindow>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
