import React from 'react'

import { LoginForm } from '@/components/LoginForm'

import { loginFormArea } from './page.css'

const LoginPage = () => {
  return (
    <div className={loginFormArea}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
