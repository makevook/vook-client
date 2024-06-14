/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { Text } from '@vook-client/design-system'
import clsx from 'clsx'

import { useModal } from '@/hooks/useModal'

import {
  modalBackdrop,
  modalButtonGroup,
  modalContainer,
  modalContent,
  modalHeadline,
} from './Modal.css'

interface ModalProps extends PropsWithChildren {}

const ModalMain = ({ children }: ModalProps) => {
  const { open, toggleModal, closing } = useModal()

  if (!open) {
    return null
  }

  const modalPortal = document.querySelector('#modal') as HTMLDivElement

  const clickBackdrop = () => {
    toggleModal()
  }

  return createPortal(
    <div
      id="modal-backdrop"
      className={clsx({
        [modalBackdrop]: true,
        closing,
      })}
      onClick={clickBackdrop}
    >
      <div
        className={clsx({
          [modalContainer]: true,
          closing,
        })}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>,
    modalPortal,
  )
}

const ModalHeadline = ({ children }: ModalProps) => {
  return (
    <div className={modalHeadline}>
      <Text
        as="strong"
        type="heading-1"
        color="label-neutral"
        fontWeight="bold"
      >
        {children}
      </Text>
    </div>
  )
}

const ModalContent = ({ children }: ModalProps) => {
  return (
    <div className={modalContent}>
      <Text type="body-2" color="label-neutral">
        {children}
      </Text>
    </div>
  )
}

const ModalButtonGroup = ({ children }: ModalProps) => {
  return <div className={modalButtonGroup}>{children}</div>
}

export const Modal = Object.assign(ModalMain, {
  Headline: ModalHeadline,
  Content: ModalContent,
  ButtonGroup: ModalButtonGroup,
})
