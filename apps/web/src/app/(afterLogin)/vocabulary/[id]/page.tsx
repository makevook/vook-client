'use client'

import React, { useState } from 'react'
import { Button, Icon, Text } from '@vook-client/design-system'
import { usePathname } from 'next/navigation'
import { useGetTermQuery } from '@vook-client/api'

import { Term } from '@/components/Term/Term'
import { useWorkspace } from '@/store/workspace'
import { useModal } from '@/hooks/useModal'
import { TermCreateModal, TermEditModal } from '@/modals/TermModal/TermModal'

import { warningContainer } from '../../layout.css'

import {
  vocabularyContainer,
  vocabularyHeader,
  vocabularyHeaderButton,
} from './page.css'

export interface TermModalDataType {
  termUid: string
  name: string
  meaning: string
  synonym: string[]
}

const Vocabulary = () => {
  const [modalData, setModalData] = useState<TermModalDataType>({
    termUid: '',
    name: '',
    meaning: '',
    synonym: [],
  })
  const { workspace } = useWorkspace()
  const { open, toggleModal } = useModal()
  const path = usePathname()
  const id = path.split('/').pop()

  const currentWorkspace = workspace.find((value) => value.uid === id)
  const { data: response } = useGetTermQuery(id as string)

  if (response === undefined) {
    return null
  }
  const isDisabled = response?.result.length >= 100

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
          <Button
            onClick={() => {
              toggleModal()
            }}
            prefixIcon={isDisabled ? undefined : 'plus-big'}
            blueLine={isDisabled}
            filled={isDisabled}
            // disabled={isDisabled}
          >
            용어생성
          </Button>
        </div>
      </div>
      {isDisabled && (
        <div className={warningContainer}>
          <Icon name="alert-warning-big" />
          <Text type="body-1" fontWeight="medium" color="label-neutral">
            용어는 100개까지만 생성 가능합니다.
          </Text>
        </div>
      )}
      <Term id={id as string} setModalData={setModalData} />
      {open && <TermCreateModal uid={id as string} />}
      {open && (
        <TermEditModal
          uid={modalData.termUid}
          name={modalData.name}
          meaning={modalData.meaning}
          synonyms={modalData.synonym.join(', ')}
        />
      )}
    </div>
  )
}

export default Vocabulary
