import React, {
  LiHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useReducer,
} from 'react'
import clsx from 'clsx'

import { Icon } from '../Icon'

import {
  accordion,
  accordionDepth,
  accordionItem,
  accordionList,
} from './Accordion.css'

export interface AccordionProps extends PropsWithChildren {
  title: string
}

export interface AccordionTitleProps extends PropsWithChildren {
  open: boolean
}

export const AccordionTitle = ({ children, open }: AccordionTitleProps) => {
  return (
    <div className={accordionItem}>
      <div
        className={clsx({
          [accordionDepth]: true,
          open,
        })}
      >
        <Icon name="chevron-right-medium" />
      </div>
      {children}
    </div>
  )
}

export type AccordionItemProps = PropsWithChildren &
  LiHTMLAttributes<HTMLLIElement>

export const AccordionItem = ({ children, ...rest }: AccordionItemProps) => {
  return (
    <li className={accordionItem} {...rest}>
      <div className={accordionDepth} />
      {children}
    </li>
  )
}

export const AccordionMain = ({ title, children }: AccordionProps) => {
  const [open, toggle] = useReducer((prev) => !prev, false)
  const quantity = (children as Array<ReactNode>).length

  return (
    <div
      className={accordion}
      style={{
        height: open ? `${44 * (quantity + 1) - 4}px` : '40px',
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div onClick={toggle}>
        <AccordionTitle open={open}>{title}</AccordionTitle>
      </div>
      <ul className={accordionList}>{children}</ul>
    </div>
  )
}

export const Accordion = Object.assign(AccordionMain, {
  Item: AccordionItem,
})
