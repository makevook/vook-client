import { render } from '@testing-library/react'

import { Icon } from '.'

describe('Icon', () => {
  it('Icon은 정상적으로 렌더링 된다.', () => {
    const { getByTitle } = render(<Icon name="X" />)
    expect(getByTitle('X')).toBeInTheDocument()
  })
})
