import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '.'

describe('Button Test', () => {
  it('Button은 정상적으로 렌더링된다.', () => {
    render(<Button>Button</Button>)

    expect(
      screen.getByRole('button', {
        name: /Button/i,
      }),
    ).toBeInTheDocument()
  })

  it('Button 클릭 시 onClick 함수가 실행된다.', async () => {
    // given
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Button</Button>)

    // when
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // then
    expect(onClick).toBeCalledTimes(1)
  })

  it('Button은 disabled 상태일 때 클릭되지 않는다.', async () => {
    // given
    const onClick = vi.fn()
    render(
      <Button onClick={onClick} disabled>
        Button
      </Button>,
    )

    // when
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // then
    expect(onClick).not.toBeCalled()
  })
})
