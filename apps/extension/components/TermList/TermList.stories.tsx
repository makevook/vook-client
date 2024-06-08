import type { Meta, StoryObj } from '@storybook/react'

import { TermList } from './TermList'

const meta = {
  title: 'TermList',
  component: TermList,
  args: {
    hits: [
      {
        term: '<strong>서버</strong>',
        synonyms: 'Server',
        meaning:
          '<strong>서버</strong>는 네트워크에 연결된 컴퓨터로 클라이언트의 요청을 받아 처리하고 결과를 응답으로 보냅니다. 웹 <strong>서버</strong>, 데이터 베이스 <strong>서버</strong>, 메일 <strong>서버</strong> 등이 <strong>서버</strong>에 속합니다.',
      },
      {
        term: '<strong>클라이언트</strong>',
        synonyms: 'Client',
        meaning:
          '<strong>클라이언트</strong>는 서버에 접속해 서비스를 요청하는 사용자 또는 사용자의 장치를 뜻합니다. 웹 브라우저, 모바일 앱, 데스크톱 앱 등이 <strong>클라이언트</strong>에 속합니다.',
      },
      {
        term: '<strong>프론트엔드</strong>',
        synonyms: 'Frontend',
        meaning:
          '<strong>프론트엔드</strong>는 사용자가 직접 사용하는 영역을 뜻합니다. 웹 프론트엔드, 모바일 프론트엔드, 데스크톱 프론트엔드 등이 <strong>프론트엔드</strong>에 속합니다.',
      },
      {
        term: '<strong>백엔드</strong>',
        synonyms: 'Backend',
        meaning:
          '<strong>백엔드</strong>는 사용자가 직접 접하지 않는 영역을 뜻합니다. 데이터베이스, 서버, 인프라 등이 <strong>백엔드</strong>에 속합니다.',
      },
      {
        term: '<strong>풀스택</strong>',
        synonyms: 'Fullstack',
        meaning:
          '<strong>풀스택</strong>은 프론트엔드와 백엔드 모두를 다룰 수 있는 개발자를 뜻합니다. 프론트엔드와 백엔드 모두에 대한 지식이 있는 개발자를 <strong>풀스택</strong> 개발자라고 합니다.',
      },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TermList>

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
