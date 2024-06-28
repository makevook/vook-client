'use client'

import React from 'react'
import { Button, Text } from '@vook-client/design-system'

import { useWorkspace } from '@/store/workspace'
import { useModal } from '@/hooks/useModal'
import { WorkspaceModal } from '@/modals/WorkspaceModal/WorkspaceModal'

import {
  workspaceInnerAlignCenter,
  workspaceInnerAlignRow,
  workspaceInnerContainer,
} from '../layout.css'

import { VocabularyItem } from './VocabularyItem'

const WorkspaceList = () => {
  const { workspace } = useWorkspace()
  const { toggleModal, open } = useModal()

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
            return <VocabularyItem key={vocubulary.id} {...vocubulary} />
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
      {open && <WorkspaceModal />}
    </>
  )
}

export default WorkspaceList
