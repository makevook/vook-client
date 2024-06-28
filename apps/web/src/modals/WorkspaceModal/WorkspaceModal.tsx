import { Button } from '@vook-client/design-system'
import { useCreateWorkspaceMutation } from '@vook-client/api'
import { ChangeEvent, useState } from 'react'
import {
  useDeleteWorkspaceMutation,
  useEditWorkspaceMutation,
} from 'node_modules/@vook-client/api/src/services/workspace/queries'

import { useModal } from '@/hooks/useModal'

import { Modal } from '../Modal/Modal'

export const WorkspaceCreateModal = () => {
  const { toggleModal } = useModal()
  const [inputValue, setInputValue] = useState('')

  const createWorkspaceMutation = useCreateWorkspaceMutation(
    {
      name: inputValue,
    },
    {
      onSuccess: () => {
        toggleModal()
      },
    },
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClinkConfirm = () => {
    createWorkspaceMutation.mutate()
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
          disabled={inputValue === ''}
          onClick={onClinkConfirm}
        >
          생성
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}

export const WorkspaceDeleteModal = ({ uid }: { uid: string }) => {
  const { toggleModal } = useModal()

  const deleteWorkspaceMutation = useDeleteWorkspaceMutation(uid, {
    onSuccess: () => {
      toggleModal()
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

export const WorkspaceEditModal = ({
  uid,
  defaultValue,
}: {
  uid: string
  defaultValue: string
}) => {
  const { toggleModal } = useModal()
  const [inputValue, setInputValue] = useState(defaultValue)

  const editWorkspaceMutation = useEditWorkspaceMutation(
    uid,
    {
      name: inputValue,
    },
    {
      onSuccess: () => {
        toggleModal()
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
