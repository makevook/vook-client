import { closeIcons } from './Close'
import { chevronIcons } from './Chevron'
import { arrowIcons } from './Arrow'
import { searchIcons } from './Search'
import { linkExternalIcons } from './LinkExternal'
import { plusIcons } from './Plus'
import { backwardIcons } from './Backward'
import { snsIcons } from './SNS'
import { emogiIcons } from './Emoji'
import { spinnerIcons } from './Spinner'
import { userIcons } from './User'
import { dotVerticalIcons } from './DotVertical'
import { downloadIcons } from './Download'
import { editIcons } from './Edit'
import { logoutIcons } from './Logout'
import { settingIcons } from './Setting'
import { trashIcons } from './Trash'
import { alertIcons } from './Alert'

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
  | keyof typeof spinnerIcons
  | keyof typeof userIcons
  | keyof typeof dotVerticalIcons
  | keyof typeof downloadIcons
  | keyof typeof editIcons
  | keyof typeof logoutIcons
  | keyof typeof settingIcons
  | keyof typeof trashIcons
  | keyof typeof alertIcons

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
  ...spinnerIcons,
  ...userIcons,
  ...dotVerticalIcons,
  ...downloadIcons,
  ...editIcons,
  ...logoutIcons,
  ...settingIcons,
  ...trashIcons,
  ...alertIcons,
}

export const iconNames = Object.keys(Icons) as IconNames[]
