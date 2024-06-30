import { Button } from '@vook-client/design-system'
import { ChangeEvent, useState } from 'react'
import { useCreateVocabularyMutation } from '@vook-client/api'
import {
  useDeleteVocabularyMutation,
  useEditVocabularyMutation,
} from 'node_modules/@vook-client/api/src/services/vocabulary/queries'
import { useQueryClient } from '@tanstack/react-query'

import { useModal } from '@/hooks/useModal'

import { Modal } from '../Modal/Modal'

export const VocabularyCreateModal = () => {
  const { toggleModal } = useModal()
  const [inputValue, setInputValue] = useState('')
  const queryClient = useQueryClient()

  const createVocabularyMutation = useCreateVocabularyMutation(
    {
      name: inputValue,
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['vocabulary'],
        })
        toggleModal()
      },
    },
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClinkConfirm = () => {
    createVocabularyMutation.mutate()
  }

  return (
    <Modal>
      <Modal.Headline>용어집 생성</Modal.Headline>
      <Modal.Input inputValue={inputValue} onInputChange={handleInputChange}>
        용어집 이름
      </Modal.Input>
      <Modal.ButtonGroup>
        <Button
          size="middle"
          filled={false}
          blueLine={false}
          fit="fill"
          onClick={toggleModal}
        >
          취소
        </Button>
        <Button
          size="middle"
          fit="fill"
          disabled={inputValue === '' || createVocabularyMutation.isPending}
          onClick={onClinkConfirm}
        >
          생성
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}

export const VocabularyDeleteModal = ({ uid }: { uid: string }) => {
  const { toggleModal } = useModal()
  const queryClient = useQueryClient()

  const deleteWorkspaceMutation = useDeleteVocabularyMutation(uid, {
    onSuccess: () => {
      toggleModal()
      queryClient.invalidateQueries({ queryKey: ['vocabulary'] })
    },
  })

  const onClinkConfirm = () => {
    deleteWorkspaceMutation.mutate()
  }

  return (
    <Modal>
      <Modal.Headline>용어집을 삭제하면 복원할 수 없습니다.</Modal.Headline>
      <Modal.Content>삭제하시겠습니까?</Modal.Content>
      <Modal.ButtonGroup>
        <Button
          size="middle"
          filled={false}
          blueLine={false}
          fit="fill"
          onClick={toggleModal}
        >
          취소
        </Button>
        <Button size="middle" fit="fill" onClick={onClinkConfirm}>
          삭제
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}

export const VocabularyEditModal = ({
  uid,
  defaultValue,
}: {
  uid: string
  defaultValue: string
}) => {
  const { toggleModal } = useModal()
  const [inputValue, setInputValue] = useState(defaultValue)
  const queryClient = useQueryClient()

  const editWorkspaceMutation = useEditVocabularyMutation(
    uid,
    {
      name: inputValue,
    },
    {
      onSuccess: () => {
        toggleModal()
        queryClient.invalidateQueries({ queryKey: ['vocabulary'] })
      },
    },
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClinkConfirm = () => {
    editWorkspaceMutation.mutate()
  }

  return (
    <Modal>
      <Modal.Headline>용어집 수정</Modal.Headline>
      <Modal.Input inputValue={inputValue} onInputChange={handleInputChange}>
        용어집 이름
      </Modal.Input>
      <Modal.ButtonGroup>
        <Button
          size="middle"
          filled={false}
          blueLine={false}
          fit="fill"
          onClick={toggleModal}
        >
          취소
        </Button>
        <Button
          size="middle"
          fit="fill"
          disabled={inputValue === ''}
          onClick={onClinkConfirm}
        >
          변경
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}
