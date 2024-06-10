import { Meta, StoryObj } from '@storybook/react'
import type { PropsWithChildren } from 'react'

import { Icon } from './Icon'
import { iconNames } from './icons'

// List 컴포넌트의 Meta 정보 정의
const meta = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'close-icon-big',
  },
  argTypes: {
    name: {
      options: iconNames,
      control: { type: 'select' },
      description: '아이콘 이름',
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof Icon>

export const Playground: Story = {}

const IconRow = ({ children }: PropsWithChildren) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
)

export const Close: Story = {
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => {
    return (
      <div>
        <p className="storybook-subtitle">Close</p>
        <IconRow>
          <Icon name="close-icon-big">{props.children}</Icon>
          <Icon name="close-icon-medium">{props.children}</Icon>
          <Icon name="close-icon-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="close-circle-big">{props.children}</Icon>
          <Icon name="close-circle-medium">{props.children}</Icon>
          <Icon name="close-circle-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="close-square-big">{props.children}</Icon>
          <Icon name="close-square-medium">{props.children}</Icon>
          <Icon name="close-square-small">{props.children}</Icon>
        </IconRow>
        <p className="storybook-subtitle">Chevron</p>
        <IconRow>
          <Icon name="chevron-down-big">{props.children}</Icon>
          <Icon name="chevron-down-medium">{props.children}</Icon>
          <Icon name="chevron-down-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="chevron-left-big">{props.children}</Icon>
          <Icon name="chevron-left-medium">{props.children}</Icon>
          <Icon name="chevron-left-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="chevron-right-big">{props.children}</Icon>
          <Icon name="chevron-right-medium">{props.children}</Icon>
          <Icon name="chevron-right-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="chevron-up-big">{props.children}</Icon>
          <Icon name="chevron-up-medium">{props.children}</Icon>
          <Icon name="chevron-up-small">{props.children}</Icon>
        </IconRow>
      </div>
    )
  },
}
