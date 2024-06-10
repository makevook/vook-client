import { create } from 'zustand'

interface SearchState {
  requestQuery: string
  query: string
  queryHistory: string[]
}

interface SearchAction {
  setQuery: (newQuery: string) => void
  setQueryHistory: (newHistory: string[]) => void
  addQuery: (newQuery: string) => void
  setRequestQuery: () => void
}

export const searchStore = create<SearchState & SearchAction>((set) => ({
  requestQuery: '',
  query: '',
  queryHistory: [],
  setQuery: (newQuery) => set(() => ({ query: newQuery })),
  setQueryHistory: (newHistory) => set(() => ({ queryHistory: newHistory })),
  addQuery: (newQuery) =>
    set((state) => ({
      queryHistory: [...state.queryHistory, newQuery],
    })),
  setRequestQuery: () => set((state) => ({ requestQuery: state.query })),
}))
