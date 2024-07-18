'use client'

import { SymbolLogo, TypoLogo } from '@vook-client/design-system'

import { IconBox } from '../IconBox'
import { IconSectionTitle } from '../IconSectionTitle'

import {
  iconContainer,
  iconSection,
  starIcon,
  typoHighlight,
  typoLogo,
} from './IconSection.css'

interface StarIconProps {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

const StarIcon = ({ left, right, top, bottom }: StarIconProps) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top,
      bottom,
      left,
      right,
    }}
    className={starIcon}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3562 2.27553C15.354 -0.758522 19.646 -0.758498 20.6438 2.27553L23.6336 11.3664L32.7245 14.3561C35.7585 15.354 35.7585 19.646 32.7245 20.6438L23.6336 23.6335L20.6438 32.7245C19.646 35.7585 15.354 35.7585 14.3562 32.7245L11.3664 23.6335L2.27551 20.6438C-0.758503 19.646 -0.758503 15.354 2.27551 14.3561L11.3664 11.3664L14.3562 2.27553Z"
      fill="black"
    />
  </svg>
)

export const IconSection = () => {
  return (
    <div className={iconSection}>
      <div className={iconContainer}>
        <IconBox name="notion" />
        <IconBox name="excel" />
        <IconBox name="pen" />
        <IconBox name="folder" />
        <IconBox name="jira" />
        <IconBox name="file" />
        <IconBox name="spredadSheet" />
        <StarIcon left={50} top={20} />
        <StarIcon right={100} top={-100} />
        <StarIcon right={400} top={400} />
        <StarIcon right={700} top={350} />
        <StarIcon left={600} top={450} />
        <div className={typoLogo}>
          <SymbolLogo size={32} />
          <div className={typoHighlight} />
          <TypoLogo />
        </div>
      </div>
      <IconSectionTitle />
    </div>
  )
}
