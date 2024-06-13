import React, { PropsWithChildren } from 'react'
import ActualLink, { LinkProps } from 'next/link'

export const Link = (props: LinkProps & PropsWithChildren) => {
  const isStorybook = process.env.IS_STORYBOOK !== undefined

  return <ActualLink {...props} prefetch={!isStorybook} />
}
