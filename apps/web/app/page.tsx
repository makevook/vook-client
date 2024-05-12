'use client'

import { Button } from '@vook-client/ui'

import { TestComponent } from '@/components/TestComponent'

const Home = () => {
  return (
    <main>
      Hello world!
      <TestComponent />
      <Button>Button</Button>
    </main>
  )
}

export default Home
