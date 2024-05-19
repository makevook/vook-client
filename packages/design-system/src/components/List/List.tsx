import { PropsWithChildren } from 'react'

import { Text, TextProps } from '../Text'

import { list } from './List.css'

export interface ListType {
  variant?: 'page' | 'search'
  kind?: 'table' | 'synonym' | 'description' | 'title'
}

export type ListProps = PropsWithChildren & ListType

export const List = ({
  variant = 'page',
  kind = 'description',
  children,
  ...rest
}: ListProps) => {
  const textType: TextProps['type'] = variant === 'page' ? 'body-2' : 'label'
  const fontWeight: TextProps['fontWeight'] =
    variant === 'page' && (kind === 'table' || kind === 'title')
      ? 'medium'
      : 'regular'

  return (
    <div className={list({ [variant]: kind })} {...rest}>
      <Text type={textType} fontWeight={fontWeight} color="inherit">
        {children}
      </Text>
    </div>
  )
}
