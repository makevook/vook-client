'use client'

import { useState, useCallback, useEffect } from 'react'

import { localStorageUtils } from '@/utils/localStorage'

import { useSearchHistory } from './useSearchHistory'

export const useSearchBox = () => {
  const [isFocused, setFocus] = useState(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const { searchHistory, setSearchHistory, vocabularyID } = useSearchHistory()

  const localStorageKey = `${vocabularyID}_searchHistory`

  const submitSearch = useCallback(
    (value: string) => {
      if (!value) {
        return
      }

      const newHistory = [value, ...searchHistory]

      if (newHistory.length > 10) {
        newHistory.pop()
      }

      localStorageUtils.setLocalStorage(localStorageKey, newHistory)
      setSearchHistory(newHistory)
    },
    [localStorageKey, searchHistory, setSearchHistory],
  )

  const deleteHistory = useCallback(
    (index: number) => {
      const newHistory = searchHistory.filter((_, i) => i !== index)
      localStorageUtils.setLocalStorage(localStorageKey, newHistory)
      setSearchHistory(newHistory)
    },
    [localStorageKey, searchHistory, setSearchHistory],
  )

  const resetSearchValue = useCallback(() => {
    setSearchValue('')
  }, [])

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const offFocus = useCallback(() => {
    setFocus(true)
  }, [])

  useEffect(() => {
    const blurHandler = (e: MouseEvent) => {
      const dom = e.target as HTMLElement
      const searchBoxId = `#search-box-${vocabularyID}`
      const isCurrentSearchBox = dom.closest(searchBoxId) !== null
      const isDeleteButton = dom.closest('.delete-button') !== null

      setFocus(isCurrentSearchBox || isDeleteButton || false)
    }

    document.addEventListener('click', blurHandler)
    return () => {
      document.removeEventListener('click', blurHandler)
    }
  }, [offFocus, onFocus, vocabularyID])

  return {
    isFocused,
    searchValue,
    searchHistory,
    onFocus,
    offFocus,
    submitSearch,
    deleteHistory,
    resetSearchValue,
  }
}
