'use client'

import React, { useState } from 'react'
import { Button, List, Text } from '@vook-client/design-system'
import { SearchSort, searchSort, useSearchQuery } from '@vook-client/api'

import { inner } from '../layout/Layout.css'
import { Hyperlink } from '../common'

import {
  highlight,
  noTermContainer,
  spinner,
  termContainer,
  termListContainer,
  termListDataContainer,
  termTitleContainer,
  textContainer,
} from './Term.css'

import { searchStore } from 'src/store/store'

// 로딩 상태 컴포넌트
const LoadingComponent = () => (
  <div className={noTermContainer}>
    {/* <div className={loadingWrapper}> */}
    <div className={spinner} />
    {/* </div> */}
  </div>
)

// 검색 결과 없음 컴포넌트
const NoSearchResults = () => (
  <div className={noTermContainer}>
    <Text type="body-1" fontWeight="medium" color="semantic-label-alternative">
      검색된 용어가 없습니다.
    </Text>
    <Button size="small" filled={false} blueLine={false} name="plus">
      <Hyperlink url="https://forms.gle/eqTF8wG1WzcY6wKF6">
        Vook에 용어 추가하기
      </Hyperlink>
    </Button>
  </div>
)

const TextContainer = ({ length }: { length?: number }) => {
  return (
    <div className={textContainer}>
      <Text type="body-1">👀 용어목록</Text>
      <Text
        type="body-1"
        fontWeight="regular"
        color="semantic-label-alternative"
      >
        {length}
      </Text>
    </div>
  )
}

export const Term = () => {
  const { requestQuery } = searchStore()
  const [sort, setSort] = useState<SearchSort>()

  const { data: response, isLoading } = useSearchQuery(
    // DTO
    {
      query: requestQuery,
      sort: sort && [sort],
      withFormat: requestQuery !== '',
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
    <div className={termContainer}>
      <div className={inner}>
        <div className={termListContainer}>
          <TextContainer length={response?.result.hits.length} />
          {isLoading ? (
            <LoadingComponent />
          ) : response?.result.hits.length === 0 ? (
            <NoSearchResults />
          ) : (
            <>
              <div className={termTitleContainer}>
                <List
                  variant="reading"
                  kind="title"
                  onClick={() => {
                    handleSort('Term')
                  }}
                >
                  용어
                </List>
                <List
                  variant="reading"
                  kind="title"
                  onClick={() => {
                    handleSort('Synonyms')
                  }}
                >
                  동의어
                </List>
                <List
                  variant="reading"
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
                      variant="reading"
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
  )
}
