import { HTMLAttributes, PropsWithChildren } from 'react'

import { Text, TextProps } from '../Text'

import { list } from './List.css'

type Variant = 'page' | 'search' | 'reading'

export interface ListType {
  variant?: 'page' | 'search' | 'reading'
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
  const variantToTextTypeMap: Record<Variant, TextProps['type']> = {
    page: 'body-2',
    search: 'label',
    reading: 'body-2-reading',
  }
  const textType: TextProps['type'] = variantToTextTypeMap[variant]
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
