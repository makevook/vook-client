'use client'

import React from 'react'
import { Button, Text } from '@vook-client/design-system'
import { useGetTermQuery } from '@vook-client/api'

import { Term } from '@/components/Term/Term'

import {
  vocabularyContainer,
  vocabularyHeader,
  vocabularyHeaderButton,
} from './page.css'

const Page = () => {
  const { data } = useGetTermQuery('74456063-f107-4b0a-846e-e641452e1ce4')

  return (
    <div className={vocabularyContainer}>
      <div className={vocabularyHeader}>
        <Text>비개발자를 위한 용어집</Text>
        <div className={vocabularyHeaderButton}>
          <Button>삭제</Button>
          <Button>용어생성</Button>
        </div>
      </div>
      {data !== null && <Term response={data!} />}
    </div>
  )
}

export default Page
