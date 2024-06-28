'use client'

import React from 'react'
import { List, Text } from '@vook-client/design-system'
import { GetTermResponse } from '@vook-client/api'

import { inner } from '../layout/Layout.css'

import {
  highlight,
  termContainer,
  termListContainer,
  termListDataContainer,
  termTitleContainer,
  textContainer,
} from './Term.css'

// // 로딩 상태 컴포넌트
// const LoadingComponent = () => (
//   <div className={noTermContainer}>
//     {/* <div className={loadingWrapper}> */}
//     <div className={spinner} />
//     {/* </div> */}
//   </div>
// )

// // 검색 결과 없음 컴포넌트
// const NoSearchResults = () => (
//   <div className={noTermContainer}>
//     <Text type="body-1" fontWeight="medium" color="semantic-label-alternative">
//       검색된 용어가 없습니다.
//     </Text>
//     <Button size="small" filled={false} blueLine={false} name="plus">
//       <Hyperlink url="https://forms.gle/eqTF8wG1WzcY6wKF6">
//         Vook에 용어 추가하기
//       </Hyperlink>
//     </Button>
//   </div>
// )

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

export const Term = ({ response }: { response: GetTermResponse }) => {
  // const [sort, setSort] = useState<SearchSort>()
  // const [minimumDelayDone, setMinimumDelayDone] = useState<boolean>(false)

  // useLayoutEffect(() => {
  //   setTimeout(() => setMinimumDelayDone(true), 500)
  // }, [])

  // const { data: response } = useSearchQuery(
  //   // DTO
  //   {
  //     query: requestQuery,
  //     sort: sort && [sort],
  //     withFormat: requestQuery !== '',
  //     highlightPreTag: '<span>',
  //     highlightPostTag: '</span>',
  //   },
  //   // query options(optional)
  //   {
  //     retry: 3,
  //   },
  // )

  // const handleSort = useCallback((kind: string) => {
  //   setSort((prevSort) => {
  //     const ascKey = `${kind}Asc` as keyof typeof searchSort
  //     const descKey = `${kind}Desc` as keyof typeof searchSort
  //     if (prevSort === searchSort[ascKey]) {
  //       return searchSort[descKey]
  //     } else {
  //       return searchSort[ascKey]
  //     }
  //   })
  // }, [])

  // const done = useMemo(
  //   () => (minimumDelayDone && !isLoading) || !response,
  //   [isLoading, minimumDelayDone, response],
  // )
  // const noResult = useMemo(
  //   () => done && response?.result.length === 0,
  //   [done, response?.result.length],
  // )
  // const hasResult = useMemo(
  //   () => ((done && response?.result.length) || 0) > 0,
  //   [done, response?.result.length],
  // )

  return (
    <div className={termContainer}>
      <div className={inner}>
        <div className={termListContainer}>
          <TextContainer length={response?.result.length} />
          {/* {!done && <LoadingComponent />}
          {noResult && <NoSearchResults />} */}
          {response?.result.length && (
            <>
              <div className={termTitleContainer}>
                <List
                  variant="reading"
                  kind="title"
                  // onClick={() => {
                  //   handleSort('Term')
                  // }}
                >
                  용어
                </List>
                <List
                  variant="reading"
                  kind="title"
                  // onClick={() => {
                  //   handleSort('Synonyms')
                  // }}
                >
                  동의어
                </List>
                <List
                  variant="reading"
                  kind="title"
                  style={{ flex: 1 }}
                  // onClick={() => {
                  //   handleSort('Meaning')
                  // }}
                >
                  뜻
                </List>
              </div>
              {response?.result.map((data, index) => {
                const synonymsList = data.synonyms.toString()
                return (
                  <div key={index} className={termListDataContainer}>
                    <List kind="table" htmlContent={data.term} />
                    <List
                      kind="synonym"
                      htmlContent={synonymsList.replaceAll(
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
