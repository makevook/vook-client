'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useVacabularyInfoQuery } from '@vook-client/api'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import {
  VocabularyCreateModal,
  VocabularyDeleteModal,
  VocabularyEditModal,
} from '@/modals/VocabularyModal/VocabularyModal'
import { LoadingComponent, NoneDataComponent } from '@/components/common/Common'

import { workspaceInnerAlignRow } from '../layout.css'

import { VocabularyItem } from './VocabularyItem'

export interface VocabularyModalDataType {
  uid: string
  defaultValue: string
}

const WorkspaceList = () => {
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

  return (
    <>
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
    </>
  )
}

export default WorkspaceList
