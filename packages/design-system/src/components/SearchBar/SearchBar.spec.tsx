import { render, screen } from '@testing-library/react'

import { SearchBar } from '.'

describe('List', () => {
  it('List는 정상적으로 렌더링 된다.', () => {
    render(<SearchBar />)

    expect(screen.getByText('SearchBar')).toBeInTheDocument()
  })
})
