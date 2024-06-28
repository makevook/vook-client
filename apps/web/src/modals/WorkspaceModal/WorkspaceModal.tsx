import { Button } from '@vook-client/design-system'
import { useCreateWorkspaceMutation } from '@vook-client/api'
import { ChangeEvent, useState } from 'react'

import { useModal } from '@/hooks/useModal'

import { Modal } from '../Modal/Modal'

export const WorkspaceModal = () => {
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
