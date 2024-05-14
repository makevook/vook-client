'use client'

import { Button } from '@vook-client/ui'

import { TestComponent } from '@/components/TestComponent'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

const Home = () => {
  return (
    <main>
      Hello world!
      <TestComponent />
      <Button>Button</Button>
      <h1>API_URL: {API_URL}</h1>
    </main>
  )
}

export default Home
