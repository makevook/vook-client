import { Meta, StoryObj } from '@storybook/react'

import { Icon, IconProps, IconType } from './Icon'

const ICON_NAME: Array<IconType['name']> = [
  'backward',
  'blog',
  'close',
  'close-circle',
  'instagram',
  'plus',
  'search',
  'symbol',
  'typo',
]

const ICON_SIZE: Array<IconProps['size']> = [
  'footer',
  'large',
  'medium',
  'small',
  'typo',
]

// List 컴포넌트의 Meta 정보 정의
const meta = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'search',
    size: 'large',
  },
  argTypes: {
    name: {
      options: ICON_NAME,
      control: { type: 'select' },
      description: '아이콘 이름',
    },
    size: {
      options: ICON_SIZE,
      control: { type: 'select' },
      description: '아이콘 크기',
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof Icon>

export const Playground: Story = {}

export const Type: Story = {
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => {
    return (
      <ul className="storybook-list">
        {ICON_NAME.map((iconName) => (
          <li key={iconName}>
            <p className="storybook-subtitle">{iconName} 아이콘</p>
            <Icon {...props} name={iconName}>
              {props.children}
            </Icon>
          </li>
        ))}
      </ul>
    )
  },
}
