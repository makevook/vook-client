'use client'

import React, { useState } from 'react'
import { Button, Text } from '@vook-client/design-system'
import { useRouter } from 'next/navigation'
import { useVacabularyInfoQuery } from '@vook-client/api'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import {
  VocabularyCreateModal,
  VocabularyDeleteModal,
  VocabularyEditModal,
} from '@/modals/VocabularyModal/VocabularyModal'

import {
  workspaceInnerAlignCenter,
  workspaceInnerAlignRow,
  workspaceInnerContainer,
} from '../layout.css'

import { VocabularyItem } from './VocabularyItem'

export interface VocabularyModalDataType {
  uid: string
  defaultValue: string
}

const WorkspaceList = () => {
  const { data: response } = useVacabularyInfoQuery()

  const { open, type, toggleModal, setModal } = useModal()
  const [modalData, setModalData] = useState<VocabularyModalDataType>({
    uid: '',
    defaultValue: '',
  })
  const router = useRouter()

  if (response == null) {
    return null
  }

  const data = response?.result.map((vocabulary) => ({
    id: vocabulary.uid,
    name: vocabulary.name,
    createdAt: new Date(vocabulary.createdAt),
  }))

  return (
    <>
      {data.length > 0 ? (
        <div className={workspaceInnerAlignRow}>
          {data.map((vocabulary) => {
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
        <div className={workspaceInnerContainer}>
          <div className={workspaceInnerAlignCenter}>
            <Text type="body-1" fontWeight="medium" color="label-alternative">
              등록된 용어집이 없습니다.
            </Text>
            <Button
              onClick={() => {
                setModal(ModalTypes.CREATE)
                toggleModal()
              }}
              prefixIcon="plus-small"
              filled={false}
              blueLine={false}
              size="small"
            >
              <Text type="label" fontWeight="bold">
                용어집 생성
              </Text>
            </Button>
          </div>
        </div>
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
    </>
  )
}

export default WorkspaceList
