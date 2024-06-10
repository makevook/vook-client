import { render } from '@testing-library/react'

import { TypoLogo } from '.'

describe('TypoLogo', () => {
  it('TypoLogo는 정상적으로 렌더링 된다.', () => {
    const { getByTitle } = render(<TypoLogo />)
    expect(getByTitle('Typo Logo')).toBeInTheDocument()
  })
})
