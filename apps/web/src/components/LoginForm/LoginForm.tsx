import { Button, Text } from '@vook-client/design-system'

import { loginForm, loginFormHeader } from './LoginForm.css'

export const LoginForm = () => {
  return (
    <form className={loginForm}>
      <div className={loginFormHeader}>
        <Text as="h2" type="title-2" fontWeight="bold">
          등록 또는 로그인
        </Text>
        <Text
          as="h3"
          type="body-1"
          color="label-alternative"
          fontWeight="medium"
        >
          용어를 가장 쉽고 빠르게 찾는 방법
        </Text>
      </div>
      <Button prefixIcon="google" blueLine={false} filled={false} fit="fill">
        구글 계정으로 계속하기
      </Button>
    </form>
  )
}
