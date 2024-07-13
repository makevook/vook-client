import React from 'react'
import { Icon, Text } from '@vook-client/design-system'

import {
  CardContainer,
  CardContainerFooter,
  CardContainerHeader,
  IconContainer,
} from './component.css'

interface CardProps {
  title?: string
  date?: string
}

export const Card = ({
  title = '비개발자를 위한 용어집',
  date = '2024년 3월 17일 생성',
}: CardProps) => {
  return (
    <div className={CardContainer}>
      <div className={CardContainerHeader}>
        <Text type="heading-1" fontWeight="bold" color="common-black">
          {title}
        </Text>
      </div>
      <div className={CardContainerFooter}>
        <Text
          type="body-2-reading"
          fontWeight="regular"
          color="semantic-label-alternative"
        >
          {date}
        </Text>
        <div className={IconContainer}>
          <Icon name="dot-vertical-medium" />
        </div>
      </div>
    </div>
  )
}
