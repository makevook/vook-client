'use client'

import { Text, List, Icon } from '@vook-client/design-system'
import { useState } from 'react'

import { SearchBar } from '@/components/SearchBar'
import {
  inner,
  main,
  searchBarContainer,
  searchContainer,
  termContainer,
  termListContainer,
  termTitleContainer,
  textContainer,
} from '@/components/index.css'

import { Footer, Header } from '../components'

// const API_URL =
//   process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

const Home = () => {
  const [wordState, setWordState] = useState('')

  return (
    <main className={main}>
      <div>
        <Header />
        <div className={searchContainer}>
          <Icon name="typo" size="largeTypo" />
          <div className={searchBarContainer}>
            <SearchBar
              wordHistory={['SDK', 'History', 'SDK']}
              wordState={wordState}
              setWordState={setWordState}
            />
          </div>
        </div>

        <div className={termContainer}>
          <div className={inner}>
            <div className={termListContainer}>
              <div className={textContainer}>
                <Text type="body-1">👀 용어목록</Text>
                <Text
                  type="body-1"
                  fontWeight="regular"
                  color="semantic-label-alternative"
                >
                  70
                </Text>
              </div>
              <div>
                <div className={termTitleContainer}>
                  <List kind="title">용어</List>
                  <List kind="title">동의어</List>
                  <List kind="title" style={{ flex: 1 }}>
                    뜻
                  </List>
                </div>
                <div style={{ display: 'flex', padding: '8px 0' }}>
                  <List kind="table">SDK</List>
                  <List kind="synonym">Software Development Kit</List>
                  <List kind="description" style={{ flex: 1 }}>
                    특정 플랫폼이나 운영체재를 위한 앱을 만드는데 필요한 도구와
                    코드 모음SDK는 앱 개발을 쉽고 빠르게 만드는 도구로 개발자가
                    처음부터 모든 것을 스스로 구축할 필요가 없어 시간과 노력을
                    절약할 수 있습니다.예) 개발자가 지도를 앱에 추가하고 싶다면
                    구글 지도 SDK를 사용할 수 있습니다. 이 SDK에는 지도 표시,
                    사용자 위치 추적, 경로 검색 등의 기능을 위한 코드와 도구가
                    포함되어 있습니다.
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Hello world!
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
      <h1>API_URL: {API_URL}</h1> */}
    </main>
  )
}

export default Home
