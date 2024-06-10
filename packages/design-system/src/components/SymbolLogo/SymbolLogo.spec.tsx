import { render } from '@testing-library/react'

import { SymbolLogo } from '.'

describe('Symbol Logo', () => {
  it('Symbol Logo는 정상적으로 렌더링 된다.', () => {
    const { getByTitle } = render(<SymbolLogo />)
    expect(getByTitle('symbol logo')).toBeInTheDocument()
  })
})
