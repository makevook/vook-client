import { render, screen } from '@testing-library/react'

import { TestComponent } from '.'

describe('TestComponent Test', () => {
  it('TestComponent은 정상적으로 렌더링된다.', () => {
    render(<TestComponent />)

    screen.debug()

    expect(screen.getByText('Server Component')).toBeInTheDocument()
  })
})
