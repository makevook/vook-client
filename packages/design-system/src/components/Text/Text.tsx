import React, { HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

import { Sprinkles, sprinkles } from '../../styles/sprinkles.css'

import { TextVariants, text } from './Text.css'

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'p' | 'span' | 'strong'
  color?: Sprinkles['color'] | 'inherit'
} & PropsWithChildren &
  HTMLAttributes<HTMLElement> &
  TextVariants

export const Text = ({
  as = 'p',
  fontWeight = 'regular',
  type = 'title-1',
  color = 'semantic-label-normal',
  children,
  ...rest
}: TextProps) => {
  const { className, ...restProps } = rest

  return React.createElement(
    as,
    {
      className: clsx(
        text({ fontWeight, type }),
        sprinkles({ color }),
        className,
      ),
      ...restProps,
    },
    children,
  )
}
