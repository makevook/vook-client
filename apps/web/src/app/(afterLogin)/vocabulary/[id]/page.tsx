'use client'

import React, { useState } from 'react'
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
import { WarnBox } from '@/components/common/Common'

import {
  vocabularyContainer,
  vocabularyHeader,
  vocabularyHeaderButton,
} from './page.css'
import { Term } from './_component/term/Term'

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
  const [checkList, setCheckList] = useState<string[]>([])
  const [length, setLength] = useState(0)

  const queryClient = useQueryClient()
  const path = usePathname()
  const { addToast } = useToast()
  const { open, toggleModal, type, setModal } = useModal()

  const { data: response } = useVacabularyInfoQuery()
  const id = path.split('/').pop()
  const currentWorkspace = response?.result.find((value) => value.uid === id)

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

  const isDisabled = length >= 100

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

      <Term
        checkList={checkList}
        setCheckList={setCheckList}
        id={id as string}
        setModalData={setModalData}
        setLength={setLength}
      />

      {open && type === ModalTypes.CREATE && (
        <TermCreateModal uid={id as string} />
      )}
      {open && type === ModalTypes.EDIT && (
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
