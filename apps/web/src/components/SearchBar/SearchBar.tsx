'use client'

import { HTMLAttributes, useEffect, useState } from 'react'
import { Icon, Text } from '@vook-client/design-system/src/index'

import {
  iconContainer,
  inputBox,
  inputContainer,
  searchBar,
  searchBarContainer,
} from './SearchBar.css'

interface SearchBarType {
  setWordState: React.Dispatch<React.SetStateAction<string>>
}
interface HistoryBarType {
  word: string
  setWord: React.Dispatch<React.SetStateAction<string>>
  removeWordFromHistory: (word: string) => void
  handleSearch: (word: string) => void
}

export type SearchBarProps = HTMLAttributes<HTMLDivElement> & SearchBarType

const HistoryBar = ({
  word,
  removeWordFromHistory,
  handleSearch,
  setWord,
}: HistoryBarType) => {
  return (
    <div
      role="presentation"
      className={searchBar({ history: true })}
      onMouseDown={() => {
        setWord(word)
        handleSearch(word)
      }}
    >
      <div className={iconContainer()}>
        <Icon name="backward" />
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
        <Icon name="close" size="small" />
      </div>
    </div>
  )
}

export const SearchBar: React.FC<SearchBarProps> = ({ setWordState }) => {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const history = localStorage.getItem('searchHistory')
        const parsedHistory = history ? (JSON.parse(history) as string[]) : []
        // 배열 형태가 아닌 경우를 대비하여, 올바른 형태인지 검사
        if (!Array.isArray(parsedHistory)) {
          throw new Error('Invalid searchHistory format')
        }
        setSearchHistory(parsedHistory)
      }
    } catch (error) {
      // 파싱 중 에러가 발생한 경우, 기본값으로 초기화
      localStorage.setItem('searchHistory', JSON.stringify([]))
      setSearchHistory([])
      // 필요하다면 사용자에게 에러 메시지를 표시
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = (searchedWord = query) => {
    const trimmedWord = searchedWord.trim()
    // window 객체가 없으면 함수를 바로 종료
    if (typeof window === 'undefined') {
      setWordState(trimmedWord)
      return
    }
    // 검색어가 비어있으면 함수를 바로 종료
    if (trimmedWord === '') {
      setWordState(trimmedWord)
      return
    }

    try {
      const history = localStorage.getItem('searchHistory')
      const tempHistory = history ? (JSON.parse(history) as string[]) : []

      // 로컬 스토리지에서 불러온 데이터가 배열이 아닌 경우, 에러를 발생시킴
      if (!Array.isArray(tempHistory)) {
        throw new Error('Invalid searchHistory format')
      }

      // 중복 검색어가 있을 경우 함수를 바로 종료
      if (tempHistory.includes(trimmedWord)) {
        setWordState(trimmedWord)
        return
      }

      // 검색 기록이 5개 이상이면 가장 오래된 검색어 제거
      if (tempHistory.length >= 5) {
        tempHistory.shift()
      }

      tempHistory.push(trimmedWord)
      localStorage.setItem('searchHistory', JSON.stringify(tempHistory))
      setSearchHistory(tempHistory) // 상태 업데이트
      setWordState(trimmedWord)
    } catch (error) {
      localStorage.setItem('searchHistory', JSON.stringify([trimmedWord]))
      setSearchHistory([trimmedWord])
      setWordState(trimmedWord)
    }
  }

  const removeWordFromHistory = (word: string) => {
    if (typeof window !== 'undefined') {
      const history = localStorage.getItem('searchHistory')
      let updatedHistory = history ? (JSON.parse(history) as string[]) : []

      // 단어 제거
      updatedHistory = updatedHistory.filter((item) => item !== word)
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))

      setSearchHistory(updatedHistory) // 상태 업데이트
    }
  }

  return (
    <div
      className={searchBarContainer}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false)
      }}
    >
      <div className={searchBar()}>
        <div className={iconContainer()}>
          <Icon name="symbol" />
        </div>
        <div className={inputContainer}>
          <input
            className={inputBox()}
            placeholder="어떤 용어가 궁금하신가요?"
            value={query}
            onChange={handleChange}
            onKeyDown={(e) => {
              e.key === 'Enter' && handleSearch()
            }}
          />
        </div>
        <div
          role="presentation"
          className={iconContainer({ click: true })}
          onClick={() => {
            handleSearch()
          }}
        >
          <Icon name="search" />
        </div>
      </div>

      {isFocused &&
        [...searchHistory]
          .reverse()
          .map((word, index) => (
            <HistoryBar
              key={index}
              word={word}
              setWord={setQuery}
              removeWordFromHistory={removeWordFromHistory}
              handleSearch={handleSearch}
            />
          ))}
    </div>
  )
}
