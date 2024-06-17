import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
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

const Trigger = ({
  children,
  ...rest
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id'>) => {
  const { toggle, setTrigger, id } = useDropbox()
  const triggerRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    setTrigger(triggerRef)
  }, [setTrigger])

  return (
    <button
      {...rest}
      className={clsx(dropboxTrigger, rest.className)}
      id={`dropbox-trigger-${id}`}
      onClick={(e) => {
        e.stopPropagation()
        toggle()
        rest.onClick?.(e)
      }}
      ref={triggerRef}
    >
      {children}
    </button>
  )
}

export interface DropboxGroupProps extends HTMLAttributes<HTMLUListElement> {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'right' | 'center'
}

const Group = ({
  children,
  vertical,
  horizontal,
  ...rest
}: DropboxGroupProps) => {
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
  }, [horizontal, open, trigger, vertical])

  if (!open) {
    return null
  }

  return (
    <ul
      {...rest}
      className={clsx(
        dropboxGroup,
        vertical,
        horizontal,
        'dropbox-group',
        rest.className,
      )}
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

const Option = ({
  children,
  ...rest
}: LiHTMLAttributes<HTMLLIElement> & PropsWithChildren) => {
  return (
    <li className={clsx(dropboxOption, rest.className)} {...rest}>
      {children}
    </li>
  )
}

export const DropboxContainer = ({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <DropboxProvider>
      <div {...rest} className={clsx([dropboxContainer, rest.className])}>
        {children}
      </div>
    </DropboxProvider>
  )
}

export const Dropbox = Object.assign(DropboxContainer, {
  Option,
  Group,
  Trigger,
})
