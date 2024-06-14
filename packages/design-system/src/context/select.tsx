'use client'

import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
  useState,
} from 'react'

interface SelectContextType {
  open: boolean
  trigger: React.RefObject<HTMLButtonElement> | null
  toggle: () => void
  setTrigger: (ref: React.RefObject<HTMLButtonElement>) => void
}

const SelectContext = createContext<SelectContextType | undefined>(undefined)

export const SelectProvider = ({ children }: PropsWithChildren) => {
  const [open, toggle] = useReducer((state) => !state, false)
  const [trigger, setTrigger] =
    useState<React.RefObject<HTMLButtonElement> | null>(null)

  return (
    <SelectContext.Provider value={{ open, toggle, trigger, setTrigger }}>
      {children}
    </SelectContext.Provider>
  )
}

export const useSelect = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error('useSelect는 SelectProvider 내부에서 사용되어야 합니다.')
  }

  return context
}
