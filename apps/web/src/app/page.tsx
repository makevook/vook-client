'use client'

import { Button, Text, List, Icon, SearchBar } from '@vook-client/design-system'
import { useState } from 'react'

import { TestComponent } from '@/components/TestComponent'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

const Home = () => {
  const [wordState, setWordState] = useState('')

  return (
    <main>
      Hello world!
      <Text>프리텐다드</Text>
      <List>Label</List>
      <SearchBar
        wordHistory={['SDK', 'History', 'SDK']}
        wordState={wordState}
        setWordState={setWordState}
      />
      <Icon name="typo" size="typo" />
      <TestComponent />
      <Button>Button</Button>
      <h1>API_URL: {API_URL}</h1>
    </main>
  )
}

export default Home
