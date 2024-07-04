import { Button } from '@vook-client/design-system'
import { useCreateVocabularyMutation } from '@vook-client/api'
import {
  useDeleteVocabularyMutation,
  useEditVocabularyMutation,
} from 'node_modules/@vook-client/api/src/services/vocabulary/queries'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { useModal } from '@/hooks/useModal'
import { useToast } from '@/hooks/useToast'

import { Modal } from '../Modal/Modal'

export const VocabularyCreateModal = () => {
  const { toggleModal } = useModal()
  const queryClient = useQueryClient()
  const { register, handleSubmit, watch } = useForm<{ name: string }>()
  const { addToast } = useToast()

  const createVocabularyMutation = useCreateVocabularyMutation(
    {
      name: watch('name'),
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['vocabulary'],
        })
        toggleModal()
        addToast({
          message: '용어집이 생성되었습니다.',
          type: 'success',
        })
      },
    },
  )

  const onSubmit = handleSubmit(() => {
    createVocabularyMutation.mutate()
  })

  return (
    <Modal>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <Modal.Headline>용어집 생성</Modal.Headline>
        <Modal.Input register={register}>용어집 이름</Modal.Input>
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
            disabled={!watch('name') || createVocabularyMutation.isPending}
            type="submit"
          >
            생성
          </Button>
        </Modal.ButtonGroup>
      </form>
    </Modal>
  )
}

export const VocabularyDeleteModal = ({ uid }: { uid: string }) => {
  const { toggleModal } = useModal()
  const { addToast } = useToast()
  const queryClient = useQueryClient()

  const deleteWorkspaceMutation = useDeleteVocabularyMutation(uid, {
    onSuccess: () => {
      toggleModal()
      queryClient.invalidateQueries({ queryKey: ['vocabulary'] })
      addToast({
        message: '용어집이 삭제되었습니다.',
        type: 'success',
      })
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
        <Button
          size="middle"
          fit="fill"
          onClick={onClinkConfirm}
          disabled={deleteWorkspaceMutation.isPending}
        >
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
  const { register, handleSubmit, watch } = useForm<{ name: string }>({
    defaultValues: {
      name: defaultValue,
    },
  })
  const queryClient = useQueryClient()
  const { addToast } = useToast()

  const editWorkspaceMutation = useEditVocabularyMutation(
    uid,
    {
      name: watch('name'),
    },
    {
      onSuccess: () => {
        toggleModal()
        queryClient.invalidateQueries({ queryKey: ['vocabulary'] })
        addToast({
          message: '용어집의 정보가 수정되었습니다.',
          type: 'success',
        })
      },
    },
  )

  const onSubmit = handleSubmit(() => {
    editWorkspaceMutation.mutate()
  })

  return (
    <Modal>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <Modal.Headline>용어집 수정</Modal.Headline>
        <Modal.Input register={register}>용어집 이름</Modal.Input>
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
            type="submit"
            disabled={!watch('name') || editWorkspaceMutation.isPending}
          >
            변경
          </Button>
        </Modal.ButtonGroup>
      </form>
    </Modal>
  )
}
