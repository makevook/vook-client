import { HTMLAttributes } from 'react'

import { IconNames, Icons } from './icons'

export type IconProps = {
  name: IconNames
} & HTMLAttributes<HTMLDivElement>

export const Icon = ({ name = 'close-icon-big' }: IconProps) => {
  return Icons[name]
}
