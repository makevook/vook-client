'use client'

import React, { useEffect, useState } from 'react'
import { Checkbox, Dropbox, Icon, List, Text } from '@vook-client/design-system'
import {
  TermSort,
  termSort,
  useDeleteTermMutation,
  useGetTermQuery,
} from '@vook-client/api'
import { useQueryClient } from '@tanstack/react-query'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import { useToast } from '@/hooks/useToast'

import {
  LoadingComponent,
  NoneDataComponent,
} from '../../../../../../components/common/Common'

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

interface Term {
  sort: 'term' | 'meaning' | 'synonym' | 'createdAt'
}

export const Term = ({
  id,
  setModalData,
  setLength,
  checkList,
  setCheckList,
}: {
  id: string
  setModalData: React.Dispatch<React.SetStateAction<TermModalDataType>>
  setLength: React.Dispatch<React.SetStateAction<number>>
  checkList: string[]
  setCheckList: React.Dispatch<React.SetStateAction<string[]>>
}) => {
  const { toggleModal, setModal } = useModal()
  const [sorts, setSorts] = useState<TermSort[]>([
    termSort.TermAsc,
    termSort.SynonymAsc,
    termSort.MeaningAsc,
    termSort.CreatedAtAsc,
  ])
  const [selectedTermUid, setSelectedTermUid] = useState('')
  const [updated, setUpdated] = useState(false)

  const { data: response, isLoading } = useGetTermQuery(id, sorts)

  const queryClient = useQueryClient()
  const { addToast } = useToast()

  const deleteTermMutation = useDeleteTermMutation(selectedTermUid, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['term', id],
      })
      addToast({
        message: '용어가 삭제되었습니다.',
        type: 'success',
      })
    },
  })

  useEffect(() => {
    if (updated) {
      queryClient.invalidateQueries({ queryKey: ['term', id, sorts] })
      setUpdated(false)
    }
  }, [updated, queryClient, id, sorts])

  if (isLoading || response == null) {
    return <LoadingComponent />
  }

  setLength(response?.result.length ?? 0)

  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const updateSort = (sorts: TermSort[], asc: TermSort, desc: TermSort) => {
    const ascIndex = sorts.indexOf(asc)
    const descIndex = sorts.indexOf(desc)
    if (ascIndex !== -1) {
      sorts.splice(ascIndex, 1)
      sorts.unshift(desc)
    } else if (descIndex !== -1) {
      sorts.splice(descIndex, 1)
      sorts.unshift(asc)
    }
  }

  const handleSort = ({ sort }: Term) => {
    const newSorts = [...sorts]
    switch (sort) {
      case 'term':
        updateSort(newSorts, termSort.TermAsc, termSort.TermDesc)
        break
      case 'meaning':
        updateSort(newSorts, termSort.MeaningAsc, termSort.MeaningDesc)
        break
      case 'synonym':
        updateSort(newSorts, termSort.SynonymAsc, termSort.SynonymDesc)
        break
      case 'createdAt':
        updateSort(newSorts, termSort.CreatedAtAsc, termSort.CreatedAtDesc)
        break
      default:
        return
    }
    setSorts(newSorts)
    setUpdated(true)
  }

  const handleCheckList = (uid: string) => {
    if (uid === 'all' && checkList.length > 0) {
      setCheckList([])
      return
    }
    if (uid === 'all') {
      if (response !== null) {
        setCheckList(
          response.result.map((data) => {
            return data.termUid
          }),
        )
      }
      return
    }
    setCheckList((prevCheckList) => {
      if (prevCheckList.includes(uid)) {
        return prevCheckList.filter((id) => id !== uid)
      } else {
        return [...prevCheckList, uid]
      }
    })
  }

  return (
    <div className={termContainer}>
      <div className={termListContainer}>
        {response?.result.length ? (
          <>
            <TextContainer length={response?.result.length} />
            <div className={termTitleContainer}>
              <List
                variant="reading"
                kind="icon"
                onClick={() => {
                  handleCheckList('all')
                }}
              >
                <Checkbox
                  onChange={() => {}}
                  checked={checkList.length === response.result.length}
                />
              </List>

              <List
                variant="reading"
                kind="title"
                onClick={() => {
                  handleSort({ sort: 'term' })
                }}
                icon={
                  sorts.includes(termSort.TermAsc)
                    ? 'arrow-down-small'
                    : 'arrow-up-small'
                }
              >
                용어
              </List>
              <List
                variant="reading"
                kind="title"
                onClick={() => {
                  handleSort({ sort: 'synonym' })
                }}
                icon={
                  sorts.includes(termSort.SynonymAsc)
                    ? 'arrow-down-small'
                    : 'arrow-up-small'
                }
              >
                동의어
              </List>
              <List
                variant="reading"
                kind="title"
                style={{ flex: 1 }}
                onClick={() => {
                  handleSort({ sort: 'meaning' })
                }}
                icon={
                  sorts.includes(termSort.MeaningAsc)
                    ? 'arrow-down-small'
                    : 'arrow-up-small'
                }
              >
                뜻
              </List>
              <List
                variant="reading"
                kind="title"
                onClick={() => {
                  handleSort({ sort: 'createdAt' })
                }}
                icon={
                  sorts.includes(termSort.CreatedAtAsc)
                    ? 'arrow-down-small'
                    : 'arrow-up-small'
                }
              >
                생성일자
              </List>
              <List variant="reading" kind="icon" />
            </div>
            {response?.result.map((data, index) => {
              const synonymsList = data.synonyms.join('\n')

              return (
                <div key={index} className={termListDataContainer}>
                  <List
                    kind="icon"
                    onClick={() => {
                      handleCheckList(data.termUid)
                    }}
                  >
                    <Checkbox
                      onChange={() => {}}
                      checked={checkList.includes(data.termUid)}
                    />
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
                            setModal(ModalTypes.EDIT)
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
        ) : (
          <NoneDataComponent type="term" />
        )}
      </div>
    </div>
  )
}
