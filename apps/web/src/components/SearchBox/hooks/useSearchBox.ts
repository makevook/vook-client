'use client'

import { useState, useCallback, useEffect, useLayoutEffect } from 'react'

import { localStorageUtils } from '@/utils/localStorage'

import { SearchHistoryItem, useSearchHistory } from './useSearchHistory'

export const useSearchBox = () => {
  const [isFocused, setFocus] = useState(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const { searchHistory, setSearchHistory } = useSearchHistory()

  const localStorageKey = 'searchHistory'

  const submitSearch = useCallback(
    (value: string) => {
      if (!value) {
        return
      }

      const isExistedValue = searchHistory.some(
        (history) => history.value === value,
      )

      const newHistory = [
        {
          value,
          date: new Date(),
        },
      ]

      if (isExistedValue) {
        newHistory.push(
          ...searchHistory.filter((history) => history.value !== value),
        )
      } else {
        newHistory.push(...searchHistory)
      }

      if (newHistory.length > 10) {
        newHistory.pop()
      }

      localStorageUtils.setLocalStorage(localStorageKey, newHistory)
      setSearchHistory(newHistory)
    },
    [localStorageKey, searchHistory, setSearchHistory],
  )

  const liftUpHistory = useCallback(
    (index: number) => {
      const newHistory = searchHistory.filter((_, i) => i !== index)
      const targetHistory = searchHistory[index]

      if (targetHistory) {
        newHistory.unshift({
          ...targetHistory,
          date: new Date(),
        })
      }

      localStorageUtils.setLocalStorage(localStorageKey, newHistory)
      setSearchHistory(newHistory)
    },
    [localStorageKey, searchHistory, setSearchHistory],
  )

  useLayoutEffect(() => {
    const histories =
      localStorageUtils.getLocalStorage<SearchHistoryItem[]>(localStorageKey)

    if (!histories) {
      return
    }

    const cleanHistory = histories.filter((history) => {
      if (
        history.date &&
        history.value &&
        typeof history.date === 'string' &&
        typeof history.value === 'string'
      ) {
        return true
      }
      return false
    })

    localStorageUtils.setLocalStorage(localStorageKey, cleanHistory)
  }, [])

  const deleteHistory = useCallback(
    (index: number) => {
      const newHistory = searchHistory.filter((_, i) => i !== index)
      localStorageUtils.setLocalStorage(localStorageKey, newHistory)
      setSearchHistory(newHistory)
    },
    [localStorageKey, searchHistory, setSearchHistory],
  )

  const changeSearchValue = useCallback((value: string) => {
    setSearchValue(value)
  }, [])

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const offFocus = useCallback(() => {
    setFocus(false)
  }, [])

  useEffect(() => {
    const blurHandler = (e: MouseEvent) => {
      const dom = e.target as HTMLElement
      const searchBoxId = '#search-box'
      const isCurrentSearchBox = dom.closest(searchBoxId) !== null
      const isDeleteButton = dom.closest('.delete-button') !== null

      setFocus(isCurrentSearchBox || isDeleteButton || false)
    }

    document.addEventListener('click', blurHandler)
    return () => {
      document.removeEventListener('click', blurHandler)
    }
  }, [offFocus, onFocus])

  return {
    isFocused,
    searchValue,
    searchHistory,
    onFocus,
    offFocus,
    liftUpHistory,
    submitSearch,
    deleteHistory,
    changeSearchValue,
  }
}
