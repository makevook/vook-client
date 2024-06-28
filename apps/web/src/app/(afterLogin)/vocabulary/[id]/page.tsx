'use client'

import React from 'react'
import { Button, Text } from '@vook-client/design-system'
import { usePathname } from 'next/navigation'

import { Term } from '@/components/Term/Term'
import { useWorkspace } from '@/store/workspace'

import {
  vocabularyContainer,
  vocabularyHeader,
  vocabularyHeaderButton,
} from './page.css'

const Vocabulary = () => {
  const { workspace } = useWorkspace()
  const path = usePathname()
  const id = path.split('/').pop()

  const currentWorkspace = workspace.find((value) => value.uid === id)

  return (
    <div className={vocabularyContainer}>
      <div className={vocabularyHeader}>
        <Text type="title-2" fontWeight="bold">
          {currentWorkspace?.name}
        </Text>
        <div className={vocabularyHeaderButton}>
          <Button prefixIcon="trash-big" blueLine={false} filled={false}>
            삭제
          </Button>
          <Button blueLine={false} filled={false}>
            용어생성
          </Button>
        </div>
      </div>
      <Term id={id as string} />
    </div>
  )
}

export default Vocabulary
