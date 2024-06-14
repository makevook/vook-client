'use client'

import {
  createContext,
  PropsWithChildren,
  useContext,
  useId,
  useLayoutEffect,
  useState,
} from 'react'

interface DropboxContextType {
  open: boolean
  trigger: React.RefObject<HTMLButtonElement> | null
  toggle: () => void
  setTrigger: (ref: React.RefObject<HTMLButtonElement>) => void
  id: string
}

const DropboxContext = createContext<DropboxContextType | undefined>(undefined)

function sanitizeId(input: string): string {
  const validIdChars = /[^a-zA-Z0-9-_.]/g

  let sanitized = input.replace(validIdChars, '')

  if (sanitized.length === 0) {
    return 'default-id'
  }

  if (!/^[a-zA-Z]/.test(sanitized)) {
    sanitized = sanitized.substring(1)
  }

  if (!/^[a-zA-Z]/.test(sanitized)) {
    sanitized = 'id-' + sanitized
  }

  return sanitized
}

export const DropboxProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen((prev) => !prev)
  }

  const createdId = useId()
  const id = sanitizeId(createdId)

  const [trigger, setTrigger] =
    useState<React.RefObject<HTMLButtonElement> | null>(null)

  useLayoutEffect(() => {
    document.addEventListener('click', (e) => {
      const dom = e.target as HTMLElement

      if (dom.closest(`#${id}`)) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    })
  }, [id])

  return (
    <DropboxContext.Provider value={{ open, id, toggle, trigger, setTrigger }}>
      <div id={id}>{children}</div>
    </DropboxContext.Provider>
  )
}

export const useDropbox = () => {
  const context = useContext(DropboxContext)

  if (!context) {
    throw new Error('useDropbox는 DropboxProvider 내부에서 사용되어야 합니다.')
  }

  return context
}
