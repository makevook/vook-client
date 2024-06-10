import type { Meta, StoryObj } from '@storybook/react'

import { iconNames } from '../Icon/icons'

import { Button, ButtonProps } from './Button'

const BUTTON_SIZES: Array<ButtonProps['size']> = [
  'large',
  'middle',
  'small',
  'mini',
]

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    size: 'large',
    filled: true,
    blueLine: true,
    disabled: false,
  },
  argTypes: {
    children: { control: 'text', description: '버튼 텍스트' },
    prefixIcon: {
      options: [...iconNames, null],
      control: { type: 'select' },
      description: '버튼 prefix 아이콘',
    },
    suffixIcon: {
      options: [...iconNames, null],
      control: { type: 'select' },
      description: '버튼 suffix 아이콘',
    },
    size: {
      options: BUTTON_SIZES,
      control: { type: 'select' },
      description: '버튼 크기',
    },
    fit: {
      options: ['fill', 'hug'],
      control: { type: 'select' },
      description: '버튼 너비',
    },
    filled: { control: 'boolean', description: '버튼 색상 채움 여부' },
    blueLine: {
      control: 'boolean',
      description: '버튼 테두리 여부',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Playground: Story = {}

export const Size: Story = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => {
    return (
      <ul className="storybook-list">
        {BUTTON_SIZES.map((size) => (
          <li key={size}>
            <p className="storybook-subtitle">{size}</p>
            <Button {...props} size={size}>
              {props.children}
            </Button>
          </li>
        ))}
      </ul>
    )
  },
}

export const Type: Story = {
  argTypes: {
    filled: {
      table: {
        disable: true,
      },
    },
    blueLine: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => {
    return (
      <ul className="storybook-list">
        <li>
          <p className="storybook-subtitle">Filled</p>
          <Button {...props} filled>
            {props.children}
          </Button>
        </li>
        <li>
          <p className="storybook-subtitle">Filled Disabled</p>
          <Button {...props} filled disabled>
            {props.children}
          </Button>
        </li>
        <li>
          <p className="storybook-subtitle">Blue Line</p>
          <Button {...props} filled={false} blueLine>
            {props.children}
          </Button>
        </li>
        <li>
          <p className="storybook-subtitle">No Blue Line</p>
          <Button {...props} filled={false}>
            {props.children}
          </Button>
        </li>
        <li>
          <p className="storybook-subtitle">Disabled</p>
          <Button {...props} filled={false} disabled>
            {props.children}
          </Button>
        </li>
      </ul>
    )
  },
}
