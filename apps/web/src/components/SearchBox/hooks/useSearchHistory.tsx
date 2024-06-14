'use client'

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'

import { localStorageUtils } from '@/utils/localStorage'

interface SearchHistoryContextType {
  vocabularyID: string
  searchHistory: string[]
  setSearchHistory: (histories: string[]) => void
}

const SearchHistoryContext = createContext<
  SearchHistoryContextType | undefined
>(undefined)

interface SearchHistoryProviderProps extends PropsWithChildren {
  vocabularyID: string
}

export const SearchHistoryProvider = ({
  vocabularyID,
  children,
}: SearchHistoryProviderProps) => {
  const [searchHistory, _setSearchHistory] = useState<string[]>(() => {
    const history = localStorageUtils.getLocalStorage<string[]>(
      `${vocabularyID}_searchHistory`,
    )
    return history || []
  })

  const setSearchHistory = useCallback(
    (histories: string[]) => {
      _setSearchHistory(histories)
      localStorageUtils.setLocalStorage(
        `${vocabularyID}_searchHistory`,
        histories,
      )
    },
    [vocabularyID],
  )

  return (
    <SearchHistoryContext.Provider
      value={{ searchHistory, setSearchHistory, vocabularyID }}
    >
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
