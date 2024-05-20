'use client'

import { HTMLAttributes, useState } from 'react'
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
  wordHistory: string[]
  wordState: string
  setWordState: React.Dispatch<React.SetStateAction<string>>
}
interface HistoryBarType {
  word: string
  // removeWordFromHistory: (word: string) => void
}

export type SearchBarProps = HTMLAttributes<HTMLDivElement> & SearchBarType

const HistoryBar = ({ word }: HistoryBarType) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      role="presentation"
      className={searchBar({ history: true })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => {
        alert('검색한 단어:' + word)
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
          alert('삭제한 단어:' + word)
          // removeWordFromHistory(word)
        }}
      >
        <Icon name="close" size="small" />
      </div>
    </div>
  )
}

export const SearchBar: React.FC<SearchBarProps> = ({
  wordHistory,
  wordState,
  setWordState,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordState(event.target.value)
  }
  // const removeWordFromHistory = (wordToRemove: string) => {
  //   setWordHistory((prev: string[]) =>
  //     prev.filter((word) => word !== wordToRemove),
  //   )
  // }

  const [isFocused, setIsFocused] = useState(false)

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
            value={wordState}
            onChange={handleChange}
          />
        </div>
        <div
          role="presentation"
          className={iconContainer({ click: true })}
          onClick={() => {
            wordState !== '' && alert('입력한 단어:' + wordState)
            setWordState('')
          }}
        >
          <Icon name="search" />
        </div>
      </div>

      {isFocused &&
        wordHistory.map((word, index) => (
          <HistoryBar key={index} word={word} />
        ))}
    </div>
  )
}
