import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@vook-client/design-system'

import { ModalContextProvider, useModal } from '@/hooks/useModal/useModal'

import { ModalOpener } from '../utils/ModalOpener'

import { Modal } from './Modal'

const ExampleModal = () => {
  const { toggleModal } = useModal()

  return (
    <Modal>
      <Modal.Headline>모달 제목</Modal.Headline>
      <Modal.Content>모달 입니다.</Modal.Content>
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
        <Button size="middle" fit="fill" onClick={toggleModal}>
          확인
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}

const meta: Meta<typeof Modal> = {
  title: 'Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div>
      <ModalContextProvider>
        <ExampleModal />
        <ModalOpener />
      </ModalContextProvider>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Modal>

export const Preview: Story = {}
