import { render, screen } from '@testing-library/react'

import { TestComponent } from '.'

describe('TestComponent Test', () => {
  it('TestComponent은 정상적으로 렌더링된다.', () => {
    render(<TestComponent />)

    expect(screen.getByText('Extension')).toBeInTheDocument()
  })
})
