import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Checkbox } from './Checkbox'

describe('Checkbox test', () => {
  it('Checkbox은 정상적으로 렌더링된다.', () => {
    // given
    render(<Checkbox onChange={() => {}} />)

    // when
    const checkbox = screen.getByRole('checkbox')

    // then
    expect(checkbox).toBeInTheDocument()
  })

  it('Checkbox를 클릭할시 check 처리가 이루어진다.', async () => {
    // given
    render(<Checkbox onChange={() => {}} />)
    const user = userEvent.setup()

    // when
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    // then
    expect(checkbox).toBeChecked()
  })
})
