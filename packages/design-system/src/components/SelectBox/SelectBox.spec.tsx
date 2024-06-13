import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SelectBox } from './SelectBox'

describe('SelectBox test', () => {
  it('SelectBox는 정상적으로 렌더링된다.', () => {
    // given
    render(<SelectBox onChange={() => {}} />)

    // when
    const selectBox = screen.getByRole('checkbox')

    // then
    expect(selectBox).toBeInTheDocument()
  })

  it('SelectBox를 클릭할시 check 처리가 이루어진다.', async () => {
    // given
    render(<SelectBox onChange={() => {}} />)
    const user = userEvent.setup()

    // when
    const selectBox = screen.getByRole('checkbox')
    await user.click(selectBox)

    // then
    expect(selectBox).toBeChecked()
  })
})
