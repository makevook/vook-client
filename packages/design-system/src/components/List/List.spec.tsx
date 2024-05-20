import { render, screen } from '@testing-library/react'

import { List } from '.'

describe('List', () => {
  it('List는 정상적으로 렌더링 된다.', () => {
    render(<List>List</List>)

    expect(screen.getByText('List')).toBeInTheDocument()
  })
})
