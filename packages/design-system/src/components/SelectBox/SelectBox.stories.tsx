import type { Meta, StoryObj } from '@storybook/react'

import { iconNames } from '../Icon/icons'

import { SelectBox } from './SelectBox'

const meta = {
  title: 'SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  args: {
    children: '엑스',
    prefixIcon: 'X',
    selected: false,
  },
  argTypes: {
    children: { control: 'text', description: '셀렉트 박스 텍스트' },
    prefixIcon: {
      options: [...iconNames, null],
      control: { type: 'select' },
      description: '셀렉트 박스 prefix 아이콘',
    },
    suffixIcon: {
      options: [...iconNames, null],
      control: { type: 'select' },
      description: '셀렉트 박스 suffix 아이콘',
    },
    fit: {
      options: ['fill', 'default', 'hug'],
      control: { type: 'select' },
      description: '셀렉트 박스 너비',
    },
  },
} satisfies Meta<typeof SelectBox>

export default meta

type Story = StoryObj<typeof SelectBox>

export const Playground: Story = {}
