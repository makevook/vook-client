'use client'

import { Button, Text } from '@vook-client/design-system'

import { TestComponent } from '@/components/TestComponent'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

const Home = () => {
  return (
    <main>
      Hello world!
      <Text>프리텐다드</Text>
      <TestComponent />
      <Button>Button</Button>
      <h1>API_URL: {API_URL}</h1>
    </main>
  )
}

export default Home
