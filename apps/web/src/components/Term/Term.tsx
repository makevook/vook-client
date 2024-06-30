'use client'

import React, { useState } from 'react'
import { Checkbox, Dropbox, Icon, List, Text } from '@vook-client/design-system'
import { useDeleteTermMutation, useGetTermQuery } from '@vook-client/api'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'

import {
  highlight,
  termContainer,
  termListContainer,
  termListDataContainer,
  termTitleContainer,
  textContainer,
} from './Term.css'

import { dropboxItem } from 'src/app/(afterLogin)/workspace/VocabularyItem.css'
import { TermModalDataType } from 'src/app/(afterLogin)/vocabulary/[id]/page'

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

export const Term = ({
  id,
  setModalData,
}: {
  id: string
  setModalData: React.Dispatch<React.SetStateAction<TermModalDataType>>
}) => {
  const { toggleModal, setModal } = useModal()
  const { data: response } = useGetTermQuery(id)
  const [selectedTermUid, setSelectedTermUid] = useState('')

  const deleteTermMutation = useDeleteTermMutation(selectedTermUid, {
    onSuccess: () => {},
  })

  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className={termContainer}>
      <div className={termListContainer}>
        <TextContainer length={response?.result.length} />

        {response?.result.length && (
          <>
            <div className={termTitleContainer}>
              <List
                variant="reading"
                kind="icon"
                // onClick={() => {
                //   handleSort('Term')
                // }}
              >
                <Checkbox onChange={() => {}} />
              </List>

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
              <List
                variant="reading"
                kind="title"
                // onClick={() => {
                //   handleSort('Meaning')
                // }}
              >
                생성일자
              </List>
              <List variant="reading" kind="icon" />
            </div>
            {response?.result.map((data, index) => {
              const synonymsList = data.synonyms.join('\n')

              return (
                <div key={index} className={termListDataContainer}>
                  <List kind="icon">
                    <Checkbox onChange={() => {}} />
                  </List>

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
                  <List
                    kind="synonym"
                    htmlContent={formatter.format(new Date(data.createdAt))}
                  />
                  <List kind="icon">
                    <Dropbox>
                      <Dropbox.Trigger>
                        <Icon name="dot-vertical-medium" />
                      </Dropbox.Trigger>
                      <Dropbox.Group horizontal="left" vertical="top">
                        <Dropbox.Option
                          onClick={() => {
                            setModalData({
                              termUid: data.termUid,
                              meaning: data.meaning,
                              name: data.term,
                              synonym: data.synonyms,
                            })
                            setModal(ModalTypes.TermEdit)
                            toggleModal()
                          }}
                        >
                          <div className={dropboxItem}>
                            <Icon name="edit-medium" />
                            <Text type="body-2">수정</Text>
                          </div>
                        </Dropbox.Option>
                        <Dropbox.Option
                          onClick={() => {
                            setSelectedTermUid(data.termUid)
                            deleteTermMutation.mutate()
                          }}
                        >
                          <div className={dropboxItem}>
                            <Icon name="trash-medium" />
                            <Text type="body-2">삭제</Text>
                          </div>
                        </Dropbox.Option>
                      </Dropbox.Group>
                    </Dropbox>
                  </List>
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}
