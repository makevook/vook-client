import { render } from '@testing-library/react'

import { LoginForm } from './LoginForm'

describe('LoginForm test', () => {
  it('구글 로그인 버튼을 누르면 구글 로그인 페이지로 이동한다.', () => {
    // given
    const { getByRole } = render(<LoginForm />)
    const googleLoginButton = getByRole('link') as HTMLAnchorElement

    // when & then
    expect(googleLoginButton.href).toContain('/oauth2/authorization/google')
  })
})
