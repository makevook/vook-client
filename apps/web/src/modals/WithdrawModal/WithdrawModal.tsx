import { Button } from '@vook-client/design-system'
import { useEffect, useState } from 'react'
import { useWithdrawMutation } from '@vook-client/api'
import Cookies from 'js-cookie'

import { useModal } from '@/hooks/useModal'

import { Modal } from '../Modal/Modal'

export const WithdrawModal = () => {
  const { toggleModal } = useModal()
  const [isConfirm, setIsConfirm] = useState(false)
  const withdrawMutation = useWithdrawMutation()

  const onClinkConfirm = () => {
    withdrawMutation.mutate()
  }

  useEffect(() => {
    if (withdrawMutation.isSuccess) {
      setIsConfirm(true)
      Cookies.remove('access')
      Cookies.remove('refresh')
    }
  }, [withdrawMutation.isSuccess])

  if (isConfirm) {
    return (
      <Modal>
        <Modal.Headline>탈퇴가 완료되었습니다.</Modal.Headline>
        <Modal.Content>그동안 Vook를 이용해주셔서 감사합니다.</Modal.Content>
        <Modal.ButtonGroup>
          <Button
            size="middle"
            fit="fill"
            onClick={() => {
              toggleModal()
              document.location.href = '/'
            }}
          >
            확인
          </Button>
        </Modal.ButtonGroup>
      </Modal>
    )
  }

  return (
    <Modal>
      <Modal.Headline>계정을 탈퇴하시겠습니까?</Modal.Headline>
      <Modal.Content>계정을 탈퇴하면 용어집이 모두 삭제됩니다.</Modal.Content>
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
          suffixIcon={withdrawMutation.isPending ? 'spinner-medium' : undefined}
          disabled={withdrawMutation.isPending}
          onClick={onClinkConfirm}
        >
          탈퇴
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}
