'use client'

import { createContext, PropsWithChildren, useContext, useReducer } from 'react'

interface AccordionContextType {
  open: boolean
  toggle: () => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
)

export const AccordionContextProvider = ({ children }: PropsWithChildren) => {
  const [open, toggle] = useReducer((prev) => !prev, false)

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordion = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(
      'useAccordion는 AccordionProvider 내부에서 사용되어야 합니다.',
    )
  }

  return context
}
