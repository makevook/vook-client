'use client'

import { IconBox } from '../IconBox'
import { IconSectionTitle } from '../IconSectionTitle'

import { iconContainer, iconSection } from './IconSection.css'

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
      </div>
      <IconSectionTitle />
    </div>
  )
}
