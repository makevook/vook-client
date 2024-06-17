import { Button } from '@vook-client/design-system'

import { useModal } from '@/hooks/useModal'

import { Modal } from '../Modal/Modal'

interface CompleteModalProps {
  completeMessage: string
}

export const CompleteModal = ({ completeMessage }: CompleteModalProps) => {
  const { toggleModal } = useModal()

  return (
    <Modal>
      <Modal.Headline>{completeMessage}</Modal.Headline>
      <Modal.ButtonGroup>
        <Button size="middle" fit="fill" onClick={() => toggleModal()}>
          확인
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}
