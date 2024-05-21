'use client'

import { Text, List, Icon } from '@vook-client/design-system'
import { useState } from 'react'
import { SearchSort, searchSort, useSearchQuery } from '@vook-client/api'

import { SearchBar } from '@/components/SearchBar'
import {
  highlight,
  inner,
  main,
  searchBarContainer,
  searchContainer,
  termContainer,
  termListContainer,
  termListDataContainer,
  termTitleContainer,
  textContainer,
} from '@/components/index.css'

import {
  Footer,
  Header,
  LoadingComponent,
  NoSearchResults,
} from '../components'

// const API_URL =
//   process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

const Home = () => {
  const [wordState, setWordState] = useState('')
  const [sort, setSort] = useState<SearchSort>(searchSort.TermAsc)

  const { data: response, isLoading } = useSearchQuery(
    // DTO
    {
      query: wordState,
      sort: [sort],
      withFormat: wordState !== '',
      highlightPreTag: '<span>',
      highlightPostTag: '</span>',
    },
    // query options(optional)
    {
      retry: 3,
    },
  )

  const handleSort = (kind: string) => {
    setSort((prevSort) => {
      const ascKey = `${kind}Asc` as keyof typeof searchSort
      const descKey = `${kind}Desc` as keyof typeof searchSort
      if (prevSort === searchSort[ascKey]) {
        return searchSort[descKey]
      } else {
        return searchSort[ascKey]
      }
    })
  }

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

              {isLoading ? (
                <LoadingComponent />
              ) : response?.result.hits.length === 0 ? (
                <NoSearchResults />
              ) : (
                <>
                  <div className={termTitleContainer}>
                    <List
                      kind="title"
                      onClick={() => {
                        handleSort('Term')
                      }}
                    >
                      용어
                    </List>
                    <List
                      kind="title"
                      onClick={() => {
                        handleSort('Synonyms')
                      }}
                    >
                      동의어
                    </List>
                    <List
                      kind="title"
                      style={{ flex: 1 }}
                      onClick={() => {
                        handleSort('Meaning')
                      }}
                    >
                      뜻
                    </List>
                  </div>

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
                </>
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
