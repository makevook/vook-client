'use client'

import React from 'react'
import { Button, Text } from '@vook-client/design-system'
import { usePathname } from 'next/navigation'
import {
  useDeleteBatchTermMutation,
  useVacabularyInfoQuery,
} from '@vook-client/api'
import { useQueryClient } from '@tanstack/react-query'

import { useModal } from '@/hooks/useModal'
import { TermCreateModal, TermEditModal } from '@/modals/TermModal/TermModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import { useToast } from '@/hooks/useToast'
import { LoadingComponent, WarnBox } from '@/components/common/Common'
import { useVocabularyStore } from '@/store/term'

import {
  vocabularyContainer,
  vocabularyHeader,
  vocabularyHeaderButton,
} from './page.css'
import { Term } from './_component/term/Term'

const Vocabulary = () => {
  const { checkList, setCheckList } = useVocabularyStore()

  const queryClient = useQueryClient()
  const { addToast } = useToast()
  const { open, toggleModal, type, setModal } = useModal()

  const path = usePathname()
  const id = path.split('/').pop()

  const { data: response, isLoading } = useVacabularyInfoQuery()

  const deleteBatchTermMutation = useDeleteBatchTermMutation(
    { termUids: checkList },
    {
      onSuccess: () => {
        setCheckList([])
        queryClient.invalidateQueries({
          queryKey: ['term', id],
        })
        addToast({
          message: '용어가 삭제되었습니다.',
          type: 'success',
        })
      },
    },
  )

  if (response == null || isLoading) {
    return <LoadingComponent />
  }

  const currentWorkspace = response?.result.find((value) => value.uid === id)

  if (!currentWorkspace) {
    return <div>404 페이지를 찾지 못하였습니다.</div>
  }

  const isDisabled = currentWorkspace?.termCount >= 100

  return (
    <div className={vocabularyContainer}>
      <div className={vocabularyHeader}>
        <Text type="title-2" fontWeight="bold">
          {currentWorkspace?.name}
        </Text>
        <div className={vocabularyHeaderButton}>
          {checkList.length > 0 && (
            <Button
              prefixIcon="trash-big"
              blueLine={false}
              filled={false}
              onClick={() => {
                deleteBatchTermMutation.mutate()
              }}
            >
              삭제
            </Button>
          )}
          <Button
            onClick={() => {
              setModal(ModalTypes.CREATE)
              toggleModal()
            }}
            prefixIcon={isDisabled ? undefined : 'plus-big'}
            blueLine={isDisabled}
            filled={isDisabled}
          >
            용어생성
          </Button>
        </div>
      </div>

      {isDisabled && <WarnBox>용어는 100개까지만 생성 가능합니다.</WarnBox>}

      <Term />

      {open && type === ModalTypes.CREATE && <TermCreateModal />}
      {open && type === ModalTypes.EDIT && <TermEditModal />}
    </div>
  )
}

export default Vocabulary
