import { renderHook } from '@testing-library/react'
import { PropsWithChildren } from 'react'

import { ModalContextProvider, useModal } from './useModal'

describe('useModal 테스트', () => {
  beforeEach(() => {
    global.innerHeight = 1080
  })

  const wrapper = ({ children }: PropsWithChildren) => (
    <div style={{ height: '3000px' }}>
      <ModalContextProvider>{children}</ModalContextProvider>
    </div>
  )

  it('모달의 기본 open은 false이다', () => {
    const { result } = renderHook(() => useModal(), {
      wrapper,
    })

    expect(result.current.open).toBe(false)
  })

  it('toggleModal 호출 시 모달 상태가 토글된다.', () => {
    const { result } = renderHook(() => useModal(), {
      wrapper,
    })

    renderHook(() => result.current.toggleModal())
    expect(result.current.open).toBe(true)

    renderHook(() => result.current.toggleModal())
    expect(result.current.open).toBe(false)
  })

  it('modal이 오픈되면 body의 스크롤이 방지된다.', () => {
    const { result } = renderHook(() => useModal(), {
      wrapper,
    })

    const bodyEl = document.querySelector('body') as HTMLBodyElement

    renderHook(() => result.current.toggleModal())
    expect(bodyEl).toHaveClass('scroll-locked')

    renderHook(() => result.current.toggleModal())
    expect(bodyEl).not.toHaveClass('scroll-locked')
  })
})
