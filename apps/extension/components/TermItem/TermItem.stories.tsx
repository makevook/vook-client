import type { Meta, StoryObj } from '@storybook/react'

import { TermItem } from './TermItem'

const meta = {
  title: 'TermItem',
  component: TermItem,
  args: {
    term: {
      term: '<strong>서버</strong>',
      synonyms: 'Server',
      meaning:
        '<strong>서버</strong>는 네트워크에 연결된 컴퓨터로 클라이언트의 요청을 받아 처리하고 결과를 응답으로 보냅니다. 웹 <strong>서버</strong>, 데이터 베이스 <strong>서버</strong>, 메일 <strong>서버</strong> 등이 <strong>서버</strong>에 속합니다.',
    },
  },
  argTypes: {
    term: {
      control: {
        type: 'object',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TermItem>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    term: {
      term: '<strong>서버</strong>',
      synonyms: 'Server',
      meaning:
        '<strong>서버</strong>는 네트워크에 연결된 컴퓨터로 클라이언트의 요청을 받아 처리하고 결과를 응답으로 보냅니다. 웹 <strong>서버</strong>, 데이터 베이스 <strong>서버</strong>, 메일 <strong>서버</strong> 등이 <strong>서버</strong>에 속합니다.',
    },
  },
}
