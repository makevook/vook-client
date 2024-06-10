import { closeIcons } from './Close'

export type IconNames = keyof typeof closeIcons

export const Icons: {
  [key in IconNames]: JSX.Element
} = {
  ...closeIcons,
}

export const iconNames = Object.keys(Icons) as IconNames[]
