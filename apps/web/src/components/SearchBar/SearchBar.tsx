'use client'

import { HTMLAttributes, useEffect, useState } from 'react'
import { Icon } from '@vook-client/design-system/src/assets/Icon'
import { Text } from '@vook-client/design-system/src/components/Text'

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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      role="presentation"
      className={searchBar({ history: true })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        role="presentation"
        className={iconContainer({ visibile: !!isHovered })}
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
    // 검색 기록 불러오기
    if (typeof window !== 'undefined') {
      const history = localStorage.getItem('searchHistory')
      setSearchHistory(history ? (JSON.parse(history) as string[]) : [])
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = (searchedWord = query) => {
    const trimmedWord = searchedWord.trim()
    if (trimmedWord !== '') {
      if (typeof window !== 'undefined') {
        const history = localStorage.getItem('searchHistory')
        const tempHistory = history ? (JSON.parse(history) as string[]) : []

        // 중복 검색어 제거
        if (!tempHistory.includes(trimmedWord)) {
          if (tempHistory.length >= 5) {
            tempHistory.shift() // 배열의 첫 번째 요소 제거
          }
          tempHistory.push(trimmedWord)
          localStorage.setItem('searchHistory', JSON.stringify(tempHistory))
          setSearchHistory(tempHistory) // 상태 업데이트
        }
      }
    }
    setWordState(trimmedWord)
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
