import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import { SelectProvider, useSelect } from '../../context/select'

import { selectContainer, selectGroup, selectOption } from './Select.css'

interface SelectProps extends PropsWithChildren {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'right'
}

const Trigger = ({ children }: PropsWithChildren) => {
  const { toggle, setTrigger } = useSelect()
  const triggerRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    setTrigger(triggerRef)
  }, [setTrigger])

  return (
    <button onClick={toggle} ref={triggerRef}>
      {children}
    </button>
  )
}

const Group = ({ children, vertical, horizontal }: SelectProps) => {
  const groupRef = useRef<HTMLUListElement>(null)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const { open, trigger } = useSelect()

  useEffect(() => {
    if (!open || !trigger) {
      return
    }

    if (vertical === 'top') {
      setTop(-groupRef.current!.getBoundingClientRect().height)
    } else {
      setTop(trigger.current!.getBoundingClientRect().height)
    }

    if (horizontal === 'right') {
      setLeft(trigger.current!.getBoundingClientRect().width)
    } else {
      setLeft(-groupRef.current!.getBoundingClientRect().width)
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
      className={selectGroup}
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
  return <li className={selectOption}>{children}</li>
}

export const SelectContainer = ({ children }: PropsWithChildren) => {
  return (
    <SelectProvider>
      <div className={selectContainer}>{children}</div>
    </SelectProvider>
  )
}

export const Select = Object.assign(SelectContainer, {
  Option,
  Group,
  Trigger,
})
