import { HTMLAttributes, PropsWithChildren } from 'react'

import { Text, TextProps } from '../Text'

import { list } from './List.css'

export interface ListType {
  variant?: 'page' | 'search'
  kind?: 'table' | 'synonym' | 'description' | 'title'
  htmlContent?: string
}

export type ListProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren &
  ListType

export const List = ({
  variant = 'page',
  kind = 'description',
  htmlContent,
  children,
  ...rest
}: ListProps) => {
  const textType: TextProps['type'] = variant === 'page' ? 'body-2' : 'label'
  const fontWeight: TextProps['fontWeight'] =
    variant === 'page' && (kind === 'table' || kind === 'title')
      ? 'medium'
      : 'regular'

  if (htmlContent) {
    return (
      <div className={list({ [variant]: kind })} {...rest}>
        <Text
          type={textType}
          fontWeight={fontWeight}
          color="inherit"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    )
  }

  return (
    <div className={list({ [variant]: kind })} {...rest}>
      <Text type={textType} fontWeight={fontWeight} color="inherit">
        {children}
      </Text>
    </div>
  )
}
