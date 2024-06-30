/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  Children,
  HTMLAttributes,
  LiHTMLAttributes,
  PropsWithChildren,
  useLayoutEffect,
} from 'react'
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

const AccordionTitle = ({
  children,
  isSideBar = false,
}: PropsWithChildren & { isSideBar?: boolean }) => {
  const { toggle, open } = useAccordion()

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        toggle()
      }}
      className={accordionItem({ sideBar: isSideBar })}
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

const AccordionItem = ({
  children,
  isSideBar = false,
  ...rest
}: LiHTMLAttributes<HTMLLIElement> & { isSideBar?: boolean }) => {
  return (
    <li className={accordionItem({ sideBar: isSideBar })} {...rest}>
      <div className={accordionDepth} />
      {children}
    </li>
  )
}

const AccordionList = ({
  children,
  defaultOpen = false,
  ...rest
}: AccordionProps) => {
  const { open, toggle } = useAccordion()
  const quantity = Children.toArray(children).length

  useLayoutEffect(() => {
    if (defaultOpen) {
      toggle()
    }
  }, [defaultOpen, toggle])

  return (
    <div
      className={clsx(accordion, rest.className)}
      style={{
        height: open ? `${44 * quantity - 4}px` : '40px',
      }}
      {...rest}
    >
      <ul className={accordionList}>{children}</ul>
    </div>
  )
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
}

const AccordionMain = ({
  children,
  defaultOpen = false,
  ...rest
}: AccordionProps) => {
  return (
    <AccordionContextProvider>
      <AccordionList defaultOpen={defaultOpen} {...rest}>
        {children}
      </AccordionList>
    </AccordionContextProvider>
  )
}

export const Accordion = Object.assign(AccordionMain, {
  Title: AccordionTitle,
  Item: AccordionItem,
})
