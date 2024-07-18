'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useVacabularyInfoQuery } from '@vook-client/api'
import { Button, Text } from '@vook-client/design-system'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import {
  VocabularyCreateModal,
  VocabularyDeleteModal,
  VocabularyEditModal,
} from '@/modals/VocabularyModal/VocabularyModal'
import {
  LoadingComponent,
  NoneDataComponent,
  WarnBox,
} from '@/components/common/Common'

import { workspaceInnerAlignRow } from '../layout.css'

import { VocabularyItem } from './_components/VocabularyItem'
import { workspaceContainer, workspaceHeader } from './layout.css'

export interface VocabularyModalDataType {
  uid: string
  defaultValue: string
}

const Home = () => {
  const { toggleModal, setModal } = useModal()

  const { data: response, isLoading } = useVacabularyInfoQuery()

  const { open, type } = useModal()
  const [modalData, setModalData] = useState<VocabularyModalDataType>({
    uid: '',
    defaultValue: '',
  })
  const router = useRouter()

  if (isLoading || response == null) {
    return <LoadingComponent />
  }

  const vocabularyData = response?.result.map((vocabulary) => ({
    id: vocabulary.uid,
    name: vocabulary.name,
    createdAt: new Date(vocabulary.createdAt),
  }))
  if (response == null) {
    return null
  }
  const isDisabled = response?.result.length >= 3
  return (
    <div className={workspaceContainer}>
      <div className={workspaceHeader}>
        <Text type="title-2" fontWeight="bold" color="label-neutral">
          MY WORKSPACE
        </Text>
        <Button
          prefixIcon={isDisabled ? undefined : 'plus-big'}
          filled={isDisabled}
          blueLine={isDisabled}
          disabled={isDisabled}
          onClick={() => {
            setModal(ModalTypes.CREATE)
            toggleModal()
          }}
        >
          용어집 생성
        </Button>
      </div>

      {isDisabled && <WarnBox>용어집은 3개까지만 생성 가능합니다.</WarnBox>}
      {vocabularyData.length > 0 ? (
        <div className={workspaceInnerAlignRow}>
          {vocabularyData.map((vocabulary) => {
            return (
              <div
                onClick={() => {
                  router.push(`/vocabulary/${vocabulary.id}`)
                }}
                key={vocabulary.id}
                role="presentation"
              >
                <VocabularyItem setModalData={setModalData} {...vocabulary} />
              </div>
            )
          })}
        </div>
      ) : (
        <NoneDataComponent type="vocabulary" />
      )}

      {open && type === ModalTypes.CREATE && <VocabularyCreateModal />}
      {open && type === ModalTypes.DELETE && (
        <VocabularyDeleteModal uid={modalData.uid} />
      )}
      {open && type === ModalTypes.EDIT && (
        <VocabularyEditModal
          uid={modalData.uid}
          defaultValue={modalData.defaultValue}
        />
      )}
    </div>
  )
}

export default Home
