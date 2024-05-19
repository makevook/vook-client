import { HTMLAttributes } from 'react'

import { IconVariants, icon } from './Icon.css'

export interface IconType {
  name?:
    | 'backward'
    | 'blog'
    | 'close-circle'
    | 'close'
    | 'instagram'
    | 'plus'
    | 'search'
    | 'symbol'
    | 'typo'
}

export type IconProps = HTMLAttributes<HTMLDivElement> & IconVariants & IconType

export const Icon = ({ name = 'search', size = 'large' }: IconProps) => {
  return (
    <div className={icon({ size })}>
      <img
        width="100%"
        src={`/Icons/${name}.svg`}
        title={`${name} image`}
        alt={`This is ${name}`}
      />
    </div>
  )
}
