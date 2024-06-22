import { Meta, StoryObj } from '@storybook/react'

import { ToastContextProvider } from '@/hooks/useToast'

import { Toast } from './Toast'

const meta: Meta = {
  title: 'Toast/Toast',
  parameters: {
    layout: 'centered',
  },
  args: {
    title: '토스트 제목',
    text: '토스트 내용',
  },
  argTypes: {
    title: {
      control: 'text',
      description: '토스트 제목',
    },
    text: {
      control: 'text',
      description: '토스트 내용',
    },
  },
  render: (_) => {
    const props = _ as { title: string; text: string }

    return (
      <ToastContextProvider>
        <Toast id={0}>
          <Toast.Content>
            <Toast.Title>{props.title}</Toast.Title>
            <Toast.Text>{props.text}</Toast.Text>
          </Toast.Content>
        </Toast>
      </ToastContextProvider>
    )
  },
}

export default meta

type Story = StoryObj

export const Preview: Story = {}
