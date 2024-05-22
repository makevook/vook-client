import { create } from 'zustand'

export interface Position {
  x: number
  y: number
}

interface ToggleStore {
  selected: boolean
  isSelected: boolean
  isOpenSearchWindow: boolean
  selectedText: string
  position: Position
  setPosition: (position: Position) => void
  setSelectedText: (text: string) => void
  changeSearchWindow: (value: boolean) => void
  changeIsSelected: (value: boolean) => void
}

const toggleStore = create<ToggleStore>((set) => ({
  selected: false,
  isSelected: false,
  isOpenSearchWindow: false,
  selectedText: '',
  position: {
    x: 0,
    y: 0,
  },
  setPosition: (position) => set((prev) => ({ ...prev, position })),
  setSelectedText: (selectedText) => set((prev) => ({ ...prev, selectedText })),
  changeSearchWindow: (isOpenSearchWindow) =>
    set((prev) => ({ ...prev, isOpenSearchWindow })),
  changeIsSelected: (isSelected) => set((prev) => ({ ...prev, isSelected })),
}))

export const useSelectedText = () => {
  const { selectedText, setSelectedText } = toggleStore()

  return { selectedText, setSelectedText }
}

export const useToggle = () => {
  const {
    isSelected,
    isOpenSearchWindow,
    position,
    changeSearchWindow,
    setPosition,
    changeIsSelected,
  } = toggleStore()

  return {
    isSelected,
    isOpenSearchWindow,
    position,
    changeSearchWindow,
    setPosition,
    changeIsSelected,
  }
}
