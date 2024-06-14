/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Children, LiHTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

import { Icon } from '../Icon'
import { AccordionContextProvider, useAccordion } from '../../context/accordion'

import {
  accordion,
  accordionDepth,
  accordionItem,
  accordionList,
  accordionTitle,
} from './Accordion.css'

const AccordionTitle = ({ children }: PropsWithChildren) => {
  const { toggle, open } = useAccordion()

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        toggle()
      }}
      className={accordionItem}
    >
      <div
        className={clsx({
          [accordionDepth]: true,
          open,
        })}
      >
        <Icon name="chevron-right-medium" />
      </div>
      <div className={accordionTitle}>{children}</div>
    </div>
  )
}

export type AccordionItemProps = PropsWithChildren &
  LiHTMLAttributes<HTMLLIElement>

const AccordionItem = ({ children, ...rest }: AccordionItemProps) => {
  return (
    <li className={accordionItem} {...rest}>
      <div className={accordionDepth} />
      {children}
    </li>
  )
}

const AccordionList = ({ children }: PropsWithChildren) => {
  const { open } = useAccordion()
  const quantity = Children.toArray(children).length

  return (
    <div
      className={accordion}
      style={{
        height: open ? `${44 * quantity - 4}px` : '40px',
      }}
    >
      <ul className={accordionList}>{children}</ul>
    </div>
  )
}

const AccordionMain = ({ children }: PropsWithChildren) => {
  return (
    <AccordionContextProvider>
      <AccordionList>{children}</AccordionList>
    </AccordionContextProvider>
  )
}

export const Accordion = Object.assign(AccordionMain, {
  Title: AccordionTitle,
  Item: AccordionItem,
})
