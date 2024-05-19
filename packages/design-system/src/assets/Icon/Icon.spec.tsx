import { render, screen } from '@testing-library/react'

import { Icon } from '.'

describe('Icon', () => {
  it('Icon은 정상적으로 렌더링 된다.', () => {
    render(<Icon />)

    expect(screen.getByText('Icon')).toBeInTheDocument()
  })
})
