'use client'

import { Icon, SymbolLogo } from '@vook-client/design-system'
import clsx from 'clsx'
import { ChangeEvent, useCallback, useLayoutEffect, useState } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import {
  historyList,
  historyListHeight,
  resetButton,
  searchBox,
  searchBoxContainer,
  searchBoxPositioner,
  searchIcon,
  searchInputArea,
  searchLogo,
} from './SearchBox.css'
import { useSearchBox } from './hooks/useSearchBox'
import { SearchHistory } from './SearchHistory'
import { useSearchHistory } from './hooks/useSearchHistory'

export const SearchBox = () => {
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  const { searchHistory, isFocused, onFocus, submitSearch, resetSearchValue } =
    useSearchBox()

  const { vocabularyID } = useSearchHistory()

  const [searchValue, setSearchValue] = useState<string>('')

  const onEnterHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // NOTE: 한글 입력 시 발생하는 이벤트를 무시합니다.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (e.isComposing || e.keyCode === 229) {
        return
      }
      if (e.key === 'Enter') {
        submitSearch(searchValue)
      }
    },
    [searchValue, submitSearch],
  )

  const onSearchChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)
    },
    [],
  )

  const onSubmitHandler = useCallback(() => {
    submitSearch(searchValue)
  }, [searchValue, submitSearch])

  if (!mounted) {
    return null
  }

  const searchBoxId = `search-box-${vocabularyID}`

  return (
    <div className={searchBoxPositioner}>
      <div
        className={clsx({
          [searchBoxContainer]: true,
          active: isFocused,
        })}
        id={searchBoxId}
      >
        <div className={searchInputArea}>
          <div className={searchLogo}>
            <SymbolLogo size={24} />
          </div>
          <input
            type="search"
            onFocus={onFocus}
            onChange={onSearchChangeHandler}
            onKeyDown={onEnterHandler}
            value={searchValue}
            placeholder="어떤 용어가 궁금하신가요?"
            className={searchBox}
          />
          <button className={searchIcon} onClick={onSubmitHandler}>
            <Icon name="search-big" />
          </button>
          {isFocused && (
            <button className={resetButton} onClick={resetSearchValue}>
              <Icon name="close-circle-big" />
            </button>
          )}
        </div>
        <ul
          className={historyList}
          style={assignInlineVars({
            [historyListHeight]: isFocused
              ? `${searchHistory.length * 44}px`
              : '0',
          })}
        >
          <li />
          {searchHistory.map((history, i) => (
            <li key={`${history}-${i}`}>
              <SearchHistory
                vocabularyID={vocabularyID}
                history={history}
                historyIndex={i}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
