import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'

import { DropboxProvider, useDropbox } from '../../context/dropbox'

import {
  dropboxContainer,
  dropboxGroup,
  dropboxOption,
  dropboxTrigger,
} from './Dropbox.css'

export interface DropboxProps extends PropsWithChildren {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'right' | 'center'
}

const Trigger = ({ children }: PropsWithChildren) => {
  const { toggle, setTrigger, id } = useDropbox()
  const triggerRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    setTrigger(triggerRef)
  }, [setTrigger])

  return (
    <button
      className={dropboxTrigger}
      id={`dropbox-trigger-${id}`}
      onClick={(e) => {
        e.stopPropagation()
        toggle()
      }}
      ref={triggerRef}
    >
      {children}
    </button>
  )
}

const Group = ({ children, vertical, horizontal }: DropboxProps) => {
  const groupRef = useRef<HTMLUListElement>(null)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const { open, trigger } = useDropbox()

  useEffect(() => {
    if (!open || !trigger) {
      return
    }

    switch (vertical) {
      case 'bottom':
        setTop(
          trigger.current!.getBoundingClientRect().y +
            trigger.current!.getBoundingClientRect().height,
        )
        break
      case 'top':
        setTop(
          trigger.current!.getBoundingClientRect().y -
            groupRef.current!.getBoundingClientRect().height,
        )
    }

    switch (horizontal) {
      case 'right':
        setLeft(
          trigger.current!.getBoundingClientRect().x +
            trigger.current!.getBoundingClientRect().width,
        )
        break
      case 'left':
        setLeft(
          trigger.current!.getBoundingClientRect().x -
            groupRef.current!.getBoundingClientRect().width,
        )
        break
      case 'center':
        setLeft(
          trigger.current!.getBoundingClientRect().x +
            trigger.current!.getBoundingClientRect().width / 2 -
            groupRef.current!.getBoundingClientRect().width / 2,
        )
    }
  }, [
    horizontal,
    open,
    trigger,
    vertical,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    groupRef.current?.getBoundingClientRect(),
  ])

  if (!open) {
    return null
  }

  return (
    <ul
      className={clsx(dropboxGroup, 'dropbox-group')}
      ref={groupRef}
      style={{
        top,
        left,
      }}
    >
      {children}
    </ul>
  )
}

const Option = ({ children }: PropsWithChildren) => {
  return <li className={dropboxOption}>{children}</li>
}

export const DropboxContainer = ({ children }: PropsWithChildren) => {
  return (
    <DropboxProvider>
      <div className={dropboxContainer}>{children}</div>
    </DropboxProvider>
  )
}

export const Dropbox = Object.assign(DropboxContainer, {
  Option,
  Group,
  Trigger,
})
