import { Button } from '@vook-client/design-system'
import { useEffect } from 'react'

import { useModal } from '@/hooks/useModal'

export const ModalOpener = () => {
  const { toggleModal } = useModal()

  useEffect(() => {
    toggleModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Button onClick={toggleModal}>Modal Open</Button>
}
