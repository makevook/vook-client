'use client'

import React, { useEffect, useState } from 'react'
import { Checkbox, Dropbox, Icon, List, Text } from '@vook-client/design-system'
import {
  TermSort,
  Terms,
  termSort,
  useDeleteTermMutation,
  useGetTermQuery,
} from '@vook-client/api'
import { useQueryClient } from '@tanstack/react-query'
import { usePathname, useSearchParams } from 'next/navigation'
import clsx from 'clsx'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import { useToast } from '@/hooks/useToast'
import { useVocabularyStore } from '@/store/term'

import {
  LoadingComponent,
  NoneDataComponent,
} from '../../../../../../components/common/Common'

import {
  highlight,
  highlightHit,
  termContainer,
  termListContainer,
  termListDataContainer,
  termTitleContainer,
  textContainer,
} from './Term.css'

import { dropboxItem } from 'src/app/(afterLogin)/workspace/VocabularyItem.css'

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

export const Term = () => {
  const path = usePathname()
  const id = path.split('/').pop() ?? ''

  const { checkList, setModalData, handleCheckList } = useVocabularyStore()
  const searchParams = useSearchParams()
  const termUid = searchParams.get('term-uid')

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
    if (!response) {
      return
    }

    if (termUid) {
      const offset = document.getElementById(termUid)?.offsetTop

      if (offset) {
        window.scrollTo({ top: offset, behavior: 'smooth' })
      }
    }
  }, [searchParams, response, termUid])

  useEffect(() => {
    if (updated) {
      queryClient.invalidateQueries({ queryKey: ['term', id, sorts] })
      setUpdated(false)
    }
  }, [updated, queryClient, id, sorts])

  if (isLoading || response == null) {
    return <LoadingComponent />
  }

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

  const handleEdit = (data: Terms) => {
    setModalData({
      termUid: data.termUid,
      meaning: data.meaning,
      name: data.term,
      synonym: data.synonyms,
    })
    setModal(ModalTypes.EDIT)
    toggleModal()
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
                  handleCheckList('all', response)
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
            {response?.result.map((termData, index) => {
              const synonymsList = termData.synonyms.join('\n')

              return (
                <div
                  key={index}
                  id={termData.termUid}
                  className={clsx({
                    [termListDataContainer]: true,
                    [highlightHit]: termData.termUid === termUid,
                  })}
                >
                  <List
                    kind="icon"
                    onClick={() => {
                      handleCheckList(termData.termUid, response)
                    }}
                  >
                    <Checkbox
                      onChange={() => {}}
                      checked={checkList.includes(termData.termUid)}
                    />
                  </List>

                  <List kind="table" htmlContent={termData.term} />
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
                    htmlContent={termData.meaning.replaceAll(
                      '<span>',
                      `<span class="${highlight}">`,
                    )}
                  />
                  <List
                    kind="synonym"
                    htmlContent={formatter.format(new Date(termData.createdAt))}
                  />
                  <List kind="icon">
                    <Dropbox>
                      <Dropbox.Trigger>
                        <Icon name="dot-vertical-medium" />
                      </Dropbox.Trigger>
                      <Dropbox.Group horizontal="left" vertical="bottom">
                        <Dropbox.Option
                          onClick={() => {
                            handleEdit(termData)
                          }}
                        >
                          <div className={dropboxItem}>
                            <Icon name="edit-medium" />
                            <Text type="body-2">수정</Text>
                          </div>
                        </Dropbox.Option>
                        <Dropbox.Option
                          onClick={() => {
                            setSelectedTermUid(termData.termUid)
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
