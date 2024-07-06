'use client'

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'

import { localStorageUtils } from '@/utils/localStorage'

export interface SearchHistoryItem {
  value: string
  date: Date
}

interface SearchHistoryContextType {
  searchHistory: SearchHistoryItem[]
  setSearchHistory: (histories: SearchHistoryItem[]) => void
}

const SearchHistoryContext = createContext<
  SearchHistoryContextType | undefined
>(undefined)

export const SearchHistoryProvider = ({ children }: PropsWithChildren) => {
  const [searchHistory, _setSearchHistory] = useState<SearchHistoryItem[]>(
    () => {
      const history =
        localStorageUtils.getLocalStorage<SearchHistoryItem[]>('searchHistory')
      return history || []
    },
  )

  const setSearchHistory = useCallback((histories: SearchHistoryItem[]) => {
    _setSearchHistory(histories)
    localStorageUtils.setLocalStorage('searchHistory', histories)
  }, [])

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, setSearchHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  )
}

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext)

  if (!context) {
    throw new Error(
      'useSearchHistory는 SearchHistoryProvider 내부에서 사용되어야 합니다.',
    )
  }

  return context
}
