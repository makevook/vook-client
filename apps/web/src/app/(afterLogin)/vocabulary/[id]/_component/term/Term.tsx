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
import { TermSortValues } from 'node_modules/@vook-client/api/src/services/term/model'

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
  sort: TermSort
}

export const Term = () => {
  const path = usePathname()
  const id = path.split('/').pop() ?? ''

  const { checkList, setModalData, handleCheckList } = useVocabularyStore()
  const searchParams = useSearchParams()
  const termUid = searchParams.get('term-uid')

  const { toggleModal, setModal } = useModal()
  const [sorts, setSorts] = useState<TermSortValues[]>([])
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

  const handleSort = ({ sort }: Term) => {
    const checkSort = (sortAsc: TermSortValues, sortDesc: TermSortValues) => {
      if (sorts.includes(sortAsc)) {
        setSorts([sortDesc])
      } else {
        setSorts([sortAsc])
      }
    }
    switch (sort) {
      case termSort.Term:
        checkSort(termSort.Term.Asc, termSort.Term.Desc)
        break
      case termSort.CreatedAt:
        checkSort(termSort.CreatedAt.Asc, termSort.CreatedAt.Desc)
        break
      case termSort.Synonym:
        checkSort(termSort.Synonym.Asc, termSort.Synonym.Desc)
        break
      case termSort.Meaning:
        checkSort(termSort.Meaning.Asc, termSort.Meaning.Desc)
        break
    }

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

  const handleSortArrow = ({ sort }: Term) => {
    const checkSort = (sortAsc: TermSortValues, sortDesc: TermSortValues) => {
      if (sorts.includes(sortAsc)) {
        return 'arrow-down-small'
      }
      if (sorts.includes(sortDesc)) {
        return 'arrow-up-small'
      }
      return undefined
    }

    switch (sort) {
      case termSort.Term:
        return checkSort(termSort.Term.Asc, termSort.Term.Desc)
      case termSort.CreatedAt:
        return checkSort(termSort.CreatedAt.Asc, termSort.CreatedAt.Desc)
      case termSort.Synonym:
        return checkSort(termSort.Synonym.Asc, termSort.Synonym.Desc)
      case termSort.Meaning:
        return checkSort(termSort.Meaning.Asc, termSort.Meaning.Desc)
    }
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
                  handleSort({ sort: termSort.Term })
                }}
                icon={handleSortArrow({ sort: termSort.Term })}
              >
                용어
              </List>
              <List
                variant="reading"
                kind="title"
                onClick={() => {
                  handleSort({ sort: termSort.Synonym })
                }}
                icon={handleSortArrow({ sort: termSort.Synonym })}
              >
                동의어
              </List>
              <List
                variant="reading"
                kind="title"
                style={{ flex: 1 }}
                onClick={() => {
                  handleSort({ sort: termSort.Meaning })
                }}
                icon={handleSortArrow({ sort: termSort.Meaning })}
              >
                뜻
              </List>
              <List
                variant="reading"
                kind="title"
                onClick={() => {
                  handleSort({ sort: termSort.CreatedAt })
                }}
                icon={handleSortArrow({ sort: termSort.CreatedAt })}
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
