import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button Test', () => {
  it('Button은 정상적으로 렌더링된다.', () => {
    render(<Button>Button</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
