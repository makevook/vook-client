'use client'

import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
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
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen((prev) => !prev)
  }

  const [trigger, setTrigger] =
    useState<React.RefObject<HTMLButtonElement> | null>(null)

  useLayoutEffect(() => {
    document.addEventListener('click', (e) => {
      const dom = e.target as HTMLElement

      if (dom.closest('.select-trigger')) {
        setOpen(true)
        return
      }

      if (dom.closest('.select-group')) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    })
  }, [])

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
