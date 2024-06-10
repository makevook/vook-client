import { closeIcons } from './Close'
import { chevronIcons } from './Chevron'
import { arrowIcons } from './Arrow'
import { searchIcons } from './Search'
import { linkExternalIcons } from './LinkExternal'
import { plusIcons } from './Plus'
import { backwardIcons } from './Backward'
import { snsIcons } from './SNS'
import { emogiIcons } from './Emoji'

export type IconNames =
  | keyof typeof closeIcons
  | keyof typeof chevronIcons
  | keyof typeof arrowIcons
  | keyof typeof searchIcons
  | keyof typeof linkExternalIcons
  | keyof typeof plusIcons
  | keyof typeof backwardIcons
  | keyof typeof snsIcons
  | keyof typeof emogiIcons

export const Icons: {
  [key in IconNames]: JSX.Element
} = {
  ...closeIcons,
  ...chevronIcons,
  ...arrowIcons,
  ...searchIcons,
  ...linkExternalIcons,
  ...plusIcons,
  ...backwardIcons,
  ...snsIcons,
  ...emogiIcons,
}

export const iconNames = Object.keys(Icons) as IconNames[]
