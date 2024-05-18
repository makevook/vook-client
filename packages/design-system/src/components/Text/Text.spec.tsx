import { render, screen } from '@testing-library/react'

import { Text } from '.'

describe('Text', () => {
  it('Text는 정상적으로 렌더링 된다.', () => {
    render(<Text>Text</Text>)

    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
