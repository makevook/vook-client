import type { Meta, StoryObj } from '@storybook/react'

import { iconNames } from '../Icon/icons'

import { Input } from './Input'

const meta = {
  title: 'Input',
  component: Input,
  args: {
    label: 'Label',
    placeholder: 'Typing',
    disabled: false,
    invalid: false,
    requirement: 'Error',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'input 라벨',
    },
    placeholder: {
      control: 'text',
      description: 'input placeholder',
    },
    disabled: {
      control: 'boolean',
      description: 'input 비활성화 여부',
    },
    invalid: {
      invalid: 'boolean',
      description: 'input 유효성 확인 상태',
    },
    requirement: {
      invalid: 'text',
      description: 'input 유효성 확인 문구',
    },
    icon: {
      options: iconNames,
      control: { type: 'select' },
      description: 'input 아이콘',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}
