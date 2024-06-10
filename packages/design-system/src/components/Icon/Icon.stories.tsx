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

export const Icons: Story = {
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
        <p className="storybook-subtitle">Arrow</p>
        <IconRow>
          <Icon name="arrow-down-big">{props.children}</Icon>
          <Icon name="arrow-down-medium">{props.children}</Icon>
          <Icon name="arrow-down-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="arrow-left-big">{props.children}</Icon>
          <Icon name="arrow-left-medium">{props.children}</Icon>
          <Icon name="arrow-left-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="arrow-right-big">{props.children}</Icon>
          <Icon name="arrow-right-medium">{props.children}</Icon>
          <Icon name="arrow-right-small">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="arrow-up-big">{props.children}</Icon>
          <Icon name="arrow-up-medium">{props.children}</Icon>
          <Icon name="arrow-up-small">{props.children}</Icon>
        </IconRow>
        <p className="storybook-subtitle">Search</p>
        <IconRow>
          <Icon name="search-big">{props.children}</Icon>
          <Icon name="search-medium">{props.children}</Icon>
          <Icon name="search-small">{props.children}</Icon>
        </IconRow>
        <p className="storybook-subtitle">Link External</p>
        <IconRow>
          <Icon name="link-external-big">{props.children}</Icon>
          <Icon name="link-external-medium">{props.children}</Icon>
          <Icon name="link-external-small">{props.children}</Icon>
        </IconRow>
        <p className="storybook-subtitle">Plus</p>
        <IconRow>
          <Icon name="plus-big">{props.children}</Icon>
          <Icon name="plus-medium">{props.children}</Icon>
          <Icon name="plus-small">{props.children}</Icon>
        </IconRow>
        <p className="storybook-subtitle">Backward</p>
        <IconRow>
          <Icon name="backward-big">{props.children}</Icon>
          <Icon name="backward-medium">{props.children}</Icon>
          <Icon name="backward-small">{props.children}</Icon>
        </IconRow>
        <p className="storybook-subtitle">sns</p>
        <IconRow>
          <Icon name="instagram">{props.children}</Icon>
          <Icon name="instagram-color">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="blog">{props.children}</Icon>
          <Icon name="blog-color">{props.children}</Icon>
        </IconRow>
        <IconRow>
          <Icon name="X">{props.children}</Icon>
          <Icon name="linkedin">{props.children}</Icon>
          <Icon name="facebook">{props.children}</Icon>
        </IconRow>
        <p className="storybook-subtitle">Emoji</p>
        <IconRow>
          <Icon name="pencil">{props.children}</Icon>
          <Icon name="laptop">{props.children}</Icon>
          <Icon name="light-bulb">{props.children}</Icon>
          <Icon name="sunglass">{props.children}</Icon>
          <Icon name="sparkles">{props.children}</Icon>
          <Icon name="artist-pallete">{props.children}</Icon>
          <Icon name="silhouette">{props.children}</Icon>
          <Icon name="speech-bulloon">{props.children}</Icon>
        </IconRow>
      </div>
    )
  },
}
