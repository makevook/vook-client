import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@vook-client/design-system'

import { ToastContextProvider, useToast } from '@/hooks/useToast'

const ToastGenerator = () => {
  const { addToast } = useToast()

  const handleClick = () => {
    addToast({
      type: 'success',
      message: '성공적으로 작업이 이루어졌습니다.',
    })
  }

  return (
    <div>
      <Button onClick={handleClick}>토스트 생성</Button>
    </div>
  )
}

const meta: Meta = {
  title: 'Toast/CompleteToast',
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div>
      <ToastContextProvider>
        <ToastGenerator />
      </ToastContextProvider>
    </div>
  ),
}

export default meta

type Story = StoryObj

export const Preview: Story = {}
