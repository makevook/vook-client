'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon, SymbolLogo, Text, TypoLogo } from '@vook-client/design-system'

import {
  iconContainer,
  inputBox,
  inputContainer,
  search,
  searchBar,
  searchBoxContainer,
} from './Search.css'

import { searchStore } from 'src/store/store'

interface HistoryBarType {
  word: string
  handleSearch: (word: string) => void
}

const HistoryBar = ({ word, handleSearch }: HistoryBarType) => {
  const { setQuery, setQueryHistory } = searchStore()

  const removeWordFromHistory = (word: string) => {
    if (typeof window !== 'undefined') {
      const history = localStorage.getItem('searchHistory')
      let updatedHistory = history ? (JSON.parse(history) as string[]) : []

      // 단어 제거
      updatedHistory = updatedHistory.filter((item) => item !== word)
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))

      setQueryHistory(updatedHistory) // 상태 업데이트
    }
  }

  return (
    <div
      role="presentation"
      className={searchBar({ history: true })}
      onMouseDown={() => {
        setQuery(word)
        handleSearch(word)
      }}
    >
      <div className={iconContainer()}>
        <Icon name="backward-big" />
      </div>
      <div className={inputContainer}>
        <Text className={inputBox({ text: true })}>{word}</Text>
      </div>
      <div
        id="close-button"
        role="presentation"
        className={iconContainer({ visibile: false })}
        onMouseDown={(e) => {
          e.stopPropagation()
          e.preventDefault()
          removeWordFromHistory(word)
        }}
      >
        <Icon name="close-icon-small" />
      </div>
    </div>
  )
}

export const SearchBox = () => {
  const { query, queryHistory, setQuery, setQueryHistory, setRequestQuery } =
    searchStore()
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)

  const getSearchHistory = () => {
    const history = localStorage.getItem('searchHistory')
    try {
      const localHistory = history ? (JSON.parse(history) as string[]) : []
      if (!Array.isArray(localHistory)) {
        throw new Error()
      }
      return localHistory
    } catch {
      return []
    }
  }

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        setQueryHistory(getSearchHistory())
      }
    } catch (error) {
      // 파싱 중 에러가 발생한 경우, 기본값으로 초기화
      localStorage.setItem('searchHistory', JSON.stringify([]))
      setQueryHistory([])
      // 필요하다면 사용자에게 에러 메시지를 표시
    }
  }, [setQueryHistory])

  const handleSearch = (searchedWord = query) => {
    const word = searchedWord.trim()

    if (word === '') {
      setRequestQuery()
      return
    }

    let localHistory = getSearchHistory()

    // 중복 검색어 제거 및 가장 최근에 검색된 단어로 이동
    localHistory = localHistory.filter((item) => item !== word)

    if (localHistory.length >= 5) {
      localHistory.shift()
    }

    localHistory.push(word)

    localStorage.setItem('searchHistory', JSON.stringify(localHistory))
    setQueryHistory(localHistory)
    setQuery(word)
    setRequestQuery()
  }

  return (
    <div
      role="presentation"
      className={searchBoxContainer}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false)
      }}
      onClick={() => {
        inputRef.current?.focus()
      }}
    >
      <div className={searchBar()}>
        <div className={iconContainer()}>
          <SymbolLogo size={24} />
        </div>
        <div className={inputContainer}>
          <input
            ref={inputRef}
            className={inputBox()}
            placeholder="어떤 용어가 궁금하신가요?"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            onKeyDown={(e) => {
              e.key === 'Enter' && handleSearch()
            }}
          />
        </div>
        {query !== '' && (
          <div
            role="presentation"
            className={iconContainer({ click: true, absoulte: true })}
            onClick={(e) => {
              e.stopPropagation()
              setQuery('')
              setRequestQuery()
            }}
          >
            <Icon name="close-circle-big" />
          </div>
        )}
        <div
          role="presentation"
          className={iconContainer({ click: true })}
          onClick={(e) => {
            e.stopPropagation()
            handleSearch()
          }}
        >
          <Icon name="search-big" />
        </div>
      </div>

      {isFocused &&
        [...queryHistory]
          .reverse()
          .map((word, index) => (
            <HistoryBar key={index} word={word} handleSearch={handleSearch} />
          ))}
    </div>
  )
}

export const Search = () => {
  return (
    <div className={search}>
      <TypoLogo />
      <SearchBox />
    </div>
  )
}
