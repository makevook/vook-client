'use client'

import { Icon, SymbolLogo, Text } from '@vook-client/design-system'
import clsx from 'clsx'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useSearchQuery, useVacabularyInfoQuery } from '@vook-client/api'

import { Link } from '../Link'

import {
  noSearchResult,
  resetButton,
  searchBox,
  searchBoxContainer,
  searchBoxPositioner,
  searchIcon,
  searchInputArea,
  searchLogo,
  searchResultHit,
  searchResultItem,
  searchResultList,
  searchResultListContainer,
  searchResultMeaning,
  searchResultMeaningText,
  searchResultSynonyms,
  searchResultTerm,
} from './SearchBox.css'
import { useSearchBox } from './hooks/useSearchBox'
import { SearchHistory } from './SearchHistory'

export const SearchBox = () => {
  const [mounted, setMounted] = useState(false)
  const [clickedHistory, setClickedHistory] = useState(false)
  const [mode, setMode] = useState<'search' | 'history' | 'none'>('none')
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  const { searchHistory, isFocused, onFocus, submitSearch, changeSearchValue } =
    useSearchBox()

  const vocabularies = useVacabularyInfoQuery()

  const vocabulariesInfo = useMemo(() => {
    return (
      vocabularies.data?.result.map((vocabulary) => ({
        uid: vocabulary.uid,
        name: vocabulary.name,
      })) ?? []
    )
  }, [vocabularies.data])

  const [searchValue, setSearchValue] = useState<string>('')

  const searchQuery = useSearchQuery(
    {
      vocabularyUids: vocabulariesInfo.map((vocabulary) => vocabulary.uid),
      queries: searchValue.split(' '),
      withFormat: true,
      highlightPreTag: '<span class="highlight">',
      highlightPostTag: '</span>',
    },
    {
      enabled: false,
    },
  )

  const onSearchChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)
    },
    [],
  )

  const onSubmitHandler = useCallback(() => {
    submitSearch(searchValue)
    if (searchValue.length > 0) {
      searchQuery.refetch()
    }
  }, [searchQuery, searchValue, submitSearch])

  const onClearHandler = useCallback(() => {
    changeSearchValue('')
    setSearchValue('')
  }, [changeSearchValue])

  useEffect(() => {
    if (!isFocused) {
      setMode('none')
      return
    }
    if (searchValue.trim().length > 0) {
      setMode('search')
      return
    }
    if (searchHistory.length > 0) {
      setMode('history')
    }
  }, [isFocused, searchHistory.length, searchValue, searchValue.length])

  useEffect(() => {
    if (clickedHistory) {
      setClickedHistory(false)

      if (searchValue.trim().length > 0) {
        searchQuery.refetch()

        setTimeout(() => {
          onFocus()
        }, 50)
      }
    }
  }, [clickedHistory, onFocus, searchQuery, searchValue])

  if (!mounted) {
    return null
  }

  const hasNoResult =
    searchQuery.isSuccess &&
    searchQuery.data.result.records.reduce(
      (acc, vocabulary) => acc + vocabulary.hits.length,
      0,
    ) === 0

  return (
    <div className={searchBoxPositioner}>
      <div
        className={clsx({
          [searchBoxContainer]: true,
          active: isFocused,
        })}
        id="search-box"
      >
        <div className={searchInputArea}>
          <div className={searchLogo}>
            <SymbolLogo size={24} />
          </div>
          <form
            style={{
              height: '100%',
            }}
            onSubmit={(e) => {
              e.preventDefault()
              onSubmitHandler()
            }}
          >
            <input
              onFocus={onFocus}
              onChange={onSearchChangeHandler}
              value={searchValue}
              placeholder="어떤 용어가 궁금하신가요?"
              className={searchBox}
            />
            <button className={searchIcon} onClick={onSubmitHandler}>
              <Icon name="search-big" />
            </button>
          </form>
          {isFocused && (
            <button className={resetButton} onClick={onClearHandler}>
              <Icon name="close-circle-big" />
            </button>
          )}
        </div>
        <div>
          <div ref={contentRef}>
            {mode === 'search' && (
              <div className={searchResultListContainer}>
                <div className={searchResultList}>
                  {hasNoResult && (
                    <div className={noSearchResult}>
                      <Text
                        type="body-1"
                        color="semantic-label-alternative"
                        fontWeight="medium"
                      >
                        검색 결과가 없습니다.
                      </Text>
                    </div>
                  )}
                  {searchQuery.data?.result.records.map((record) => {
                    return (
                      record.hits.length > 0 && (
                        <div key={record.vocabularyUid}>
                          <div className={searchResultItem}>
                            <Text
                              type="label"
                              color="semantic-label-alternative"
                            >
                              {
                                vocabulariesInfo.find(
                                  (vocabulary) =>
                                    vocabulary.uid === record.vocabularyUid,
                                )?.name
                              }
                            </Text>
                          </div>
                          <div>
                            {record.hits.map((hit) => (
                              <Link
                                href={`/vocabulary/${record.vocabularyUid}?term-uid=${hit.uid}`}
                                onClick={() => {
                                  setMode('none')
                                }}
                                key={hit.uid}
                              >
                                <div
                                  className={clsx([
                                    searchResultItem,
                                    searchResultHit,
                                  ])}
                                >
                                  <div className={searchResultTerm}>
                                    <Text
                                      color="semantic-primary-heavy"
                                      type="body-2"
                                      fontWeight="medium"
                                      dangerouslySetInnerHTML={{
                                        __html: hit.term,
                                      }}
                                    />
                                  </div>
                                  <div className={searchResultSynonyms}>
                                    <Text
                                      color="semantic-label-alternative"
                                      type="body-2"
                                      fontWeight="medium"
                                      dangerouslySetInnerHTML={{
                                        __html: hit.synonyms,
                                      }}
                                    />
                                  </div>
                                  <div className={searchResultMeaning}>
                                    <Text
                                      as="p"
                                      type="body-2"
                                      fontWeight="medium"
                                      className={searchResultMeaningText}
                                      dangerouslySetInnerHTML={{
                                        __html: hit.meaning,
                                      }}
                                    />
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    )
                  })}
                </div>
              </div>
            )}
            {mode === 'history' && (
              <div>
                {searchHistory.map((history, i) => (
                  <div key={`${history.value}-${i}`}>
                    <SearchHistory
                      onClick={() => {
                        setSearchValue(history.value)
                        setMode('search')
                        setClickedHistory(true)
                      }}
                      history={history}
                      historyIndex={i}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
