import type { Meta, StoryObj } from '@storybook/react'

import { tokens } from '../../tokens'
import { colors } from '../../tokens/colors'
import { fontWeights } from '../../tokens/typography'

import { Text, TextProps } from './Text'

type TextTypes = Array<TextProps['type']>

const textTypes: TextTypes = [
  'display-1',
  'display-2',
  'title-1',
  'title-2',
  'title-3',
  'heading-1',
  'heading-2',
  'body-1',
  'body-2',
  'label',
  'caption-1',
]

const meta = {
  title: 'Text',
  component: Text,
  args: {
    children:
      'The Quick Brown Fox Jumps Over The Lazy Dog\n다람쥐 헌 쳇바퀴에 타고파',
    type: 'title-1',
    color: 'semantic-label-normal',
    fontWeight: 'regular',
  },
  argTypes: {
    children: {
      control: 'text',
      description: '텍스트 컨텐츠',
    },
    type: {
      options: textTypes,
      control: { type: 'select' },
      description: '텍스트 스타일',
    },
    color: {
      options: Object.keys(tokens.colors),
      control: { type: 'select' },
      description: '텍스트 색상',
    },
    fontWeight: {
      control: { type: 'radio' },
      options: ['regular', 'medium', 'bold'],
      description: '텍스트 굵기',
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Type: Story = {
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
  render: (props: TextProps) => {
    return (
      <ul className="storybook-list">
        {textTypes.map((type) => (
          <li key={type}>
            <p className="storybook-subtitle">{type}</p>
            <Text {...props} type={type} />
          </li>
        ))}
      </ul>
    )
  },
}

export const Color: Story = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  render: (props: TextProps) => {
    return (
      <ul className="storybook-list">
        {Object.keys(colors).map((color) => (
          <li key={color}>
            <p className="storybook-subtitle">{color}</p>
            <Text {...props} color={color as TextProps['color']} />
          </li>
        ))}
      </ul>
    )
  },
}

export const Weight: Story = {
  argTypes: {
    fontWeight: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => {
    return (
      <ul className="storybook-list">
        {Object.keys(fontWeights).map((weight) => (
          <li key={weight}>
            <p className="storybook-subtitle">{weight}</p>
            <Text {...props} fontWeight={weight as TextProps['fontWeight']}>
              {props.children}
            </Text>
          </li>
        ))}
      </ul>
    )
  },
}
