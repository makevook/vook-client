import type { StoryObj } from '@storybook/react'

import { Accordion } from './Accordion'

const meta = {
  title: 'Accordion',
  component: Accordion,
  args: {
    title: 'Title',
    defaultOpen: false,
    content: ['Content', 'Content2', 'Content3'],
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '아코디언 제목',
    },
    content: {
      control: { type: 'array' },
      description: '아코디언 아이템',
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: '아코디언 기본 오픈 여부',
    },
  },
  tags: ['autodocs'],
  render: (props: { title: string; content: string[] }) => {
    return (
      <div style={{ width: 300 }}>
        <Accordion>
          <Accordion.Title>아코디언</Accordion.Title>
          {props.content.map((item, idx) => (
            <Accordion.Item key={item + idx}>{item}</Accordion.Item>
          ))}
        </Accordion>
      </div>
    )
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
  render: (props: { title: string; content: string[] }) => {
    return (
      <div style={{ width: 300 }}>
        <Accordion defaultOpen>
          <Accordion.Title>아코디언</Accordion.Title>
          {props.content.map((item, idx) => (
            <Accordion.Item key={item + idx}>{item}</Accordion.Item>
          ))}
        </Accordion>
      </div>
    )
  },
}
