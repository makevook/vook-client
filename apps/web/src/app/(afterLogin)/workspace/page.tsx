'use client'

import React, { useState } from 'react'
import { Button, Text } from '@vook-client/design-system'

import { useWorkspace } from '@/store/workspace'
import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import {
  WorkspaceCreateModal,
  WorkspaceDeleteModal,
  WorkspaceEditModal,
} from '@/modals/WorkspaceModal/WorkspaceModal'

import {
  workspaceInnerAlignCenter,
  workspaceInnerAlignRow,
  workspaceInnerContainer,
} from '../layout.css'

import { VocabularyItem } from './VocabularyItem'

export interface ModalDataType {
  uid: string
  defaultValue: string
}

const WorkspaceList = () => {
  const { workspace } = useWorkspace()
  const { open, type, toggleModal, setModal } = useModal()
  const [modalData, setModalData] = useState<ModalDataType>({
    uid: '',
    defaultValue: '',
  })

  const data = workspace.map((vocabulary) => ({
    id: vocabulary.uid,
    name: vocabulary.name,
    createdAt: new Date(vocabulary.createdAt),
  }))

  return (
    <>
      {data.length > 0 ? (
        <div className={workspaceInnerAlignRow}>
          {data.map((vocubulary) => {
            return (
              <VocabularyItem
                key={vocubulary.id}
                setModalData={setModalData}
                {...vocubulary}
              />
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

      {open && type === ModalTypes.CREATE && <WorkspaceCreateModal />}
      {open && type === ModalTypes.DELETE && (
        <WorkspaceDeleteModal uid={modalData.uid} />
      )}
      {open && type === ModalTypes.EDIT && (
        <WorkspaceEditModal
          uid={modalData.uid}
          defaultValue={modalData.defaultValue}
        />
      )}
    </>
  )
}

export default WorkspaceList
