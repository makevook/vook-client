import { Meta, StoryObj } from '@storybook/react'

import { List, ListType } from './List'

const LIST_VARIANTS: Array<ListType['variant']> = ['page', 'search']
const LIST_KINDS: Array<ListType['kind']> = [
  'description',
  'synonym',
  'table',
  'title',
]

// List 컴포넌트의 Meta 정보 정의
const meta = {
  title: 'List',
  component: List,
  tags: ['autodocs'],
  args: {
    children: 'List',
    variant: 'page',
    kind: 'description',
  },
  argTypes: {
    children: {
      control: 'text',
      description: '라벨 텍스트',
    },
    variant: {
      options: LIST_VARIANTS,
      control: { type: 'select' },
      description: '라벨 타입',
    },
    kind: {
      options: LIST_KINDS,
      control: { type: 'select' },
      description: '라벨 타입',
    },
  },
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof List>

export const Playground: Story = {}

export const Type: Story = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    kind: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => {
    return (
      <ul className="storybook-list">
        <li>
          <p className="storybook-subtitle">Label</p>
          <List {...props} variant="page" kind="table">
            {props.children}
          </List>
          <List {...props} variant="search" kind="table">
            {props.children}
          </List>
        </li>
        <li>
          <p className="storybook-subtitle">Text</p>
          <List {...props} variant="page" kind="synonym">
            {props.children}
          </List>
          <List {...props} variant="search" kind="synonym">
            {props.children}
          </List>
        </li>
        <li>
          <p className="storybook-subtitle">Descrption</p>
          <List {...props} variant="page" kind="description">
            {props.children}
          </List>
          <List {...props} variant="search" kind="description">
            {props.children}
          </List>
        </li>
        <li>
          <p className="storybook-subtitle">Label</p>
          <List {...props} variant="page" kind="title">
            {props.children}
          </List>
          <List {...props} variant="search" kind="title">
            {props.children}
          </List>
        </li>
      </ul>
    )
  },
}
