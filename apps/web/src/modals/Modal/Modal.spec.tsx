import { act, render, renderHook, screen } from '@testing-library/react'
import { PropsWithChildren, ReactNode } from 'react'

import { useModal } from '@/hooks/useModal'
import { ModalContextProvider } from '@/hooks/useModal/useModal'

import { Modal } from './Modal'

const modalOpenTrigger = (childrenNode?: ReactNode) => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <ModalContextProvider>
      {children}
      {childrenNode}
      <Modal>
        <div>modal child</div>
      </Modal>
      <div id="modal" />
    </ModalContextProvider>
  )

  const { result, rerender } = renderHook(() => useModal(), {
    wrapper: Wrapper,
  })

  act(() => result.current.toggleModal())

  return {
    result,
    rerender,
  }
}

describe('Modal 테스트', () => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <ModalContextProvider>
      {children}
      <Modal>
        <div>modal child</div>
      </Modal>
      <div id="modal" />
    </ModalContextProvider>
  )

  it('모달이 open 상태가 아니라면 렌더링되지 않는다.', () => {
    render(<Wrapper />)

    expect(screen.queryByText('modal child')).not.toBeInTheDocument()
  })

  it('모달이 open 상태라면 렌더링된다.', () => {
    const { result } = modalOpenTrigger()

    expect(result.current.open).toBe(true)
    expect(screen.getByText('modal child')).toBeInTheDocument()
  })
})
