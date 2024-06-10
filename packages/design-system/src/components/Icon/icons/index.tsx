import { closeIcons } from './Close'
import { chevronIcons } from './Chevron'

export type IconNames = keyof typeof closeIcons | keyof typeof chevronIcons

export const Icons: {
  [key in IconNames]: JSX.Element
} = {
  ...closeIcons,
  ...chevronIcons,
}

export const iconNames = Object.keys(Icons) as IconNames[]
