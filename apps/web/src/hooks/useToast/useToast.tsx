'use client'

import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { toastContainer } from './toast.css'

import CompleteToast from 'src/toasts/CompleteToast/CompleteToast'

export interface ToastItem {
  message: string
  type?: 'success' | 'error'
  disappear?: boolean
}

interface ToastListItem extends ToastItem {
  id: number
}

interface ToastValues {
  addToast: (toast: ToastItem) => void
  deleteToast: (id: number) => void
}

const ToastContext = createContext<ToastValues | undefined>(undefined)

export const ToastContextProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastListItem[]>([])

  const disappearToast = (id: number) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, disappear: true } : toast,
      ),
    )
  }

  const deleteToast = (id: number) => {
    disappearToast(id)
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 600)
  }

  const addToast = (toast: ToastItem) => {
    if (toasts.length >= 10) {
      return
    }

    const newToast = {
      ...toast,
      id: Date.now(),
      disappear: false,
    }

    setToasts((prev) => [...prev, newToast])
    setTimeout(() => {
      deleteToast(newToast.id)
    }, 4400)
  }

  const toastsElement = () => {
    return toasts.map((toast, index) => {
      if (toast.type === 'success') {
        return (
          <CompleteToast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            disappear={toast.disappear}
          />
        )
      }
      return <div key={index} />
    })
  }

  return (
    <ToastContext.Provider value={{ addToast, deleteToast }}>
      {children}
      <div id="toast" className={toastContainer}>
        {toastsElement()}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error(
      'useToast 커스텀 훅은 ToastContextProvider 내부에서 호출해야 합니다.',
    )
  }

  return context
}
