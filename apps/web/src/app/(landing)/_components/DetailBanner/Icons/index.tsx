import {
  PointerIcon,
  ChevronDown,
  WorkspaceIcon,
  Share,
  Star,
  Vook,
  Extension,
  Toggle,
  More,
  VookLogo,
  CheckItem,
} from './Icon'

export const BannerIcons = {
  PointerIcon,
  ChevronDown,
  WorkspaceIcon,
  Share,
  Star,
  Vook,
  Extension,
  Toggle,
  More,
  VookLogo,
  CheckItem,
}

export type IconNames = keyof typeof BannerIcons

export const iconNames = Object.keys(BannerIcons) as IconNames[]
