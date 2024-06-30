'use client'

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'

interface ModalValues {
  open: boolean
  closing: boolean
  toggleModal: VoidFunction
  setModal: (newType: ModalTypes) => void
  type: ModalTypes
}

export enum ModalTypes {
  CREATE,
  EDIT,
  DELETE,
  NULL,
}

const ModalContext = createContext<ModalValues | undefined>(undefined)

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false)
  const [closing, setClosing] = useState<boolean>(false)
  const [type, setType] = useState<ModalTypes>(ModalTypes.NULL)

  const setModal = useCallback((newType: ModalTypes) => {
    setType(newType)
  }, [])

  const toggleModal = useCallback(() => {
    document.body.classList.toggle('scroll-locked')

    if (open) {
      setClosing(true)
      setTimeout(() => {
        setType(ModalTypes.NULL)
        setOpen(false)
        setClosing(false)
      }, 500)
    } else {
      setOpen(true)
    }
  }, [open])

  return (
    <ModalContext.Provider
      value={{
        open,
        toggleModal,
        setModal,
        closing,
        type,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error(
      'useModal 커스텀 훅은 ModalContextProvider 내부에서 호출해야 합니다.',
    )
  }

  return context
}
