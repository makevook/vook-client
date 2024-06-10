import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from './Input'

describe('Input test', () => {
  it('Input은 정상적으로 렌더링된다.', () => {
    // given
    render(<Input />)

    // when
    const input = screen.getByRole('textbox')

    // then
    expect(input).toBeInTheDocument()
  })

  it('Input은 label을 렌더링한다.', () => {
    // given
    render(<Input label="label" />)

    // when
    const label = screen.getByText('label')

    // then
    expect(label).toBeInTheDocument()
  })
  it('Input은 placeHolder를 렌더링한다.', () => {
    // given
    render(<Input placeholder="placeholder" />)

    // when
    const input = screen.getByPlaceholderText('placeholder')

    // then
    expect(input).toBeInTheDocument()
  })

  it('Input은 disable이 true일시 비활성화된다.', () => {
    // given
    render(<Input disabled />)

    // when
    const input = screen.getByRole('textbox')

    // then
    expect(input).toBeDisabled()
  })

  it('Input에 타이핑할시 value가 변경된다.', async () => {
    // given
    render(<Input />)
    const user = userEvent.setup()

    // when
    const input = screen.getByRole('textbox')
    await user.type(input, 'value')

    // then
    expect(input).toHaveValue('value')
  })

  it('Input은 required가 true일시 필수 입력요소가 된다', () => {
    // given
    render(<Input required />)

    // when
    const input = screen.getByRole('textbox')

    // then
    expect(input).toBeRequired()
  })

  it('Input은 readOnly가 true일시 타이핑해도 value가 변경되지 않는다.', async () => {
    // given
    render(<Input readOnly />)
    const user = userEvent.setup()

    // when
    const input = screen.getByRole('textbox')
    await user.type(input, 'value')

    // then
    expect(input).toHaveValue('')
  })

  it('Input은 invalid가 true일시 requirement를 출력한다.', () => {
    // given
    render(<Input invalid requirement="3자 이상 입력해주세요!" />)

    // when
    const requirement = screen.getByText('3자 이상 입력해주세요!')

    // then
    expect(requirement).toBeInTheDocument()
  })
})
