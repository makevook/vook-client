'use client'

import { Button, Text, List, Icon } from '@vook-client/design-system'

import { TestComponent } from '@/components/TestComponent'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

const Home = () => {
  return (
    <main>
      Hello world!
      <Text>프리텐다드</Text>
      <List>Label</List>
      <Icon name="typo" size="typo" />
      <TestComponent />
      <Button>Button</Button>
      <h1>API_URL: {API_URL}</h1>
    </main>
  )
}

export default Home
