'use client'

import { Text, List, Icon, Button } from '@vook-client/design-system'
import { useEffect, useState } from 'react'

import { SearchBar } from '@/components/SearchBar'
import {
  chromeOnly,
  highlight,
  inner,
  linkStyle,
  main,
  noTermContainer,
  searchBarContainer,
  searchContainer,
  termContainer,
  termListContainer,
  termListDataContainer,
  termTitleContainer,
  textContainer,
} from '@/components/index.css'

import { Footer, Header } from '../components'
import { useSearchQuery } from '../../../../packages/api/src'

// const API_URL =
//   process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

const Home = () => {
  const [wordState, setWordState] = useState('')

  const { data: response, isLoading } = useSearchQuery(
    // DTO
    {
      query: wordState,
      sort: ['synonyms:asc', 'term:asc'],
      withFormat: wordState !== '' && true,
      highlightPreTag: '<span>',
      highlightPostTag: '</span>',
    },
    // query options(optional)
    {
      retry: 3,
    },
  )

  useEffect(() => {
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

    if (isChrome) {
      document
        .getElementById('chrome-only-element')
        ?.classList.remove(chromeOnly)
    }
  }, [])

  return (
    <main className={main}>
      <div>
        <Header />
        <div className={searchContainer}>
          <Icon name="typo" size="largeTypo" />
          <div className={searchBarContainer}>
            <SearchBar setWordState={setWordState} />
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
                  {response?.result.hits.length}
                </Text>
              </div>
              {response?.result.hits.length === 0 ? (
                <div className={noTermContainer}>
                  <Text
                    type="body-1"
                    fontWeight="medium"
                    color="semantic-label-alternative"
                  >
                    검색된 용어가 없습니다.
                  </Text>
                  <Button
                    size="small"
                    filled={false}
                    blueLine={false}
                    name="plus"
                  >
                    <a
                      className={linkStyle}
                      href="https://forms.gle/eqTF8wG1WzcY6wKF6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vook에 용어 추가하기
                    </a>
                  </Button>
                </div>
              ) : (
                <div>
                  <div className={termTitleContainer}>
                    <List kind="title">용어</List>
                    <List kind="title">동의어</List>
                    <List kind="title" style={{ flex: 1 }}>
                      뜻
                    </List>
                  </div>
                  {isLoading && <Text>로딩중</Text>}
                  {response?.result.hits.map((data, index) => {
                    return (
                      <div key={index} className={termListDataContainer}>
                        <List kind="table" htmlContent={data.term} />
                        <List
                          kind="synonym"
                          htmlContent={data.synonyms.replaceAll(
                            '<span>',
                            `<span class="${highlight}">`,
                          )}
                        />
                        <List
                          kind="description"
                          style={{ flex: 1 }}
                          htmlContent={data.meaning.replaceAll(
                            '<span>',
                            `<span class="${highlight}">`,
                          )}
                        />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Home
