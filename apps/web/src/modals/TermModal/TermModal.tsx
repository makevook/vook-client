'use client'

import { Button, Text } from '@vook-client/design-system'
import { useForm } from 'react-hook-form'
import { useAddTermMutation, useEditTermMutation } from '@vook-client/api'
import { useQueryClient } from '@tanstack/react-query'

import { useModal } from '@/hooks/useModal'
import { useToast } from '@/hooks/useToast'

import { Modal } from '../Modal/Modal'
import { modalLowerTextGroup } from '../Modal/Modal.css'

export interface TermFormValues {
  name: string
  synonyms: string
  meaning: string
}

export const TermCreateModal = ({ uid }: { uid: string }) => {
  const { toggleModal } = useModal()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TermFormValues>()
  const queryClient = useQueryClient()
  const { addToast } = useToast()

  const addTermMutation = useAddTermMutation(
    {
      vocabularyUid: uid,
      term: watch('name'),
      meaning: watch('meaning'),
      synonyms: watch('synonyms')!
        ? watch('synonyms')
            .split(',')
            .map((synonym) => synonym.trim())
            .filter(Boolean)
        : [],
    },
    {
      onSuccess: () => {
        toggleModal()
        queryClient.invalidateQueries({
          queryKey: ['term'],
        })
        addToast({
          message: '용어가 생성되었습니다.',
          type: 'success',
        })
      },
    },
  )

  const onSubmit = handleSubmit(() => {
    addTermMutation.mutate()
  })

  return (
    <Modal>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <Modal.Headline>용어 생성</Modal.Headline>
        <Modal.InputForm
          register={register}
          name="name"
          placeholder="용어"
          isRequired
        >
          용어
        </Modal.InputForm>
        <div className={modalLowerTextGroup}>
          <Text type="label" color="status-error">
            {errors.name && '용어를 입력해 주세요.'}
          </Text>
        </div>

        <Modal.Textarea
          register={register}
          name="synonyms"
          placeholder="쉼표(,)를 사용해서 동의어를 구분할 수 있습니다."
        >
          동의어(선택)
        </Modal.Textarea>
        <Modal.LowerTextGroup
          leftText=""
          RightText={watch('synonyms') ? watch('synonyms').length : 0}
        />

        <Modal.Textarea
          register={register}
          name="meaning"
          placeholder="용어의 뜻을 작성해 주세요."
          isRequired
        >
          뜻
        </Modal.Textarea>
        <Modal.LowerTextGroup
          leftText={errors.meaning && '뜻을 입력해 주세요.'}
          RightText={watch('meaning') ? watch('meaning').length : 0}
        />

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
            disabled={addTermMutation.isPending}
          >
            생성
          </Button>
        </Modal.ButtonGroup>
      </form>
    </Modal>
  )
}

interface EditType {
  uid: string
  name: string
  meaning: string
  synonyms: string
}

export const TermEditModal = ({ uid, name, meaning, synonyms }: EditType) => {
  const { toggleModal } = useModal()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TermFormValues>({
    defaultValues: {
      name,
      meaning,
      synonyms,
    },
  })
  const queryClient = useQueryClient()
  const { addToast } = useToast()

  const editTermMutation = useEditTermMutation(
    {
      term: watch('name'),
      meaning: watch('meaning'),
      synonyms: watch('synonyms')!
        ? watch('synonyms')
            .split(',')
            .map((synonym) => synonym.trim())
            .filter(Boolean)
        : [],
    },
    uid,
    {
      onSuccess: () => {
        toggleModal()
        queryClient.invalidateQueries({
          queryKey: ['term'],
        })
        addToast({
          message: '용어 정보가 수정되었습니다.',
          type: 'success',
        })
      },
    },
  )

  const onSubmit = handleSubmit(() => {
    editTermMutation.mutate()
  })

  return (
    <Modal>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <Modal.Headline>용어 수정</Modal.Headline>
        <Modal.InputForm
          register={register}
          name="name"
          placeholder="용어"
          isRequired
        >
          용어
        </Modal.InputForm>
        <div className={modalLowerTextGroup}>
          <Text type="label" color="status-error">
            {errors.name && '용어를 입력해 주세요.'}
          </Text>
        </div>

        <Modal.Textarea
          register={register}
          name="synonyms"
          placeholder="쉼표(,)를 사용해서 동의어를 구분할 수 있습니다."
        >
          동의어(선택)
        </Modal.Textarea>
        <Modal.LowerTextGroup
          leftText=""
          RightText={watch('synonyms') ? watch('synonyms').length : 0}
        />

        <Modal.Textarea
          register={register}
          name="meaning"
          placeholder="용어의 뜻을 작성해 주세요."
          isRequired
        >
          뜻
        </Modal.Textarea>
        <Modal.LowerTextGroup
          leftText={errors.meaning && '뜻을 입력해 주세요.'}
          RightText={watch('meaning') ? watch('meaning').length : 0}
        />

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
            disabled={editTermMutation.isPending}
          >
            수정
          </Button>
        </Modal.ButtonGroup>
      </form>
    </Modal>
  )
}
