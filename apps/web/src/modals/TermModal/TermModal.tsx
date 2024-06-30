'use client'

import { Button, Text } from '@vook-client/design-system'
import { useForm } from 'react-hook-form'
import { useAddTermMutation } from 'node_modules/@vook-client/api/src/services/term/quries'

import { useModal } from '@/hooks/useModal'

import { Modal } from '../Modal/Modal'
import { modalLowerTextGroup, modalTextCountGroup } from '../Modal/Modal.css'

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

  const addTermMutation = useAddTermMutation(
    {
      vocabularyUid: uid,
      term: watch('name'),
      meaning: watch('meaning'),
      synonyms:
        watch('synonyms') !== undefined
          ? watch('synonyms')
              .split(',')
              .map((synonym) => synonym.trim())
              .filter(Boolean)
          : [],
    },
    {
      onSuccess: () => {
        toggleModal()
      },
    },
  )

  const onSubmit = handleSubmit(() => {
    addTermMutation.mutate()
    toggleModal()
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
        <div className={modalLowerTextGroup}>
          <Text />
          <div className={modalTextCountGroup}>
            <Text type="label" color="semantic-label-neutral">
              0
            </Text>
            <Text type="label" color="semantic-label-assistive">
              /
            </Text>
            <Text type="label" color="semantic-label-alternative">
              2000
            </Text>
          </div>
        </div>

        <Modal.Textarea
          register={register}
          name="meaning"
          placeholder="용어의 뜻을 작성해 주세요."
          isRequired
        >
          뜻
        </Modal.Textarea>
        <div className={modalLowerTextGroup}>
          <Text type="label" color="status-error">
            {errors.meaning && '뜻을 입력해 주세요.'}
          </Text>
          <div className={modalTextCountGroup}>
            <Text type="label" color="semantic-label-neutral">
              0
            </Text>
            <Text type="label" color="semantic-label-assistive">
              /
            </Text>
            <Text type="label" color="semantic-label-alternative">
              2000
            </Text>
          </div>
        </div>

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
