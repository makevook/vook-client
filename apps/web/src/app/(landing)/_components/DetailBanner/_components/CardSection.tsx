'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Icon, Text } from '@vook-client/design-system'

import { AppearBottom } from '@/components/AppearBottom'

import {
  CardContainer,
  CardContainerFooter,
  CardContainerHeader,
  IconContainer,
} from './CardSectoin.css'

interface CardProps {
  title?: string
  date?: string
}

export const Card = ({
  title = '비개발자를 위한 용어집',
  date = '2024년 3월 17일 생성',
}: CardProps) => (
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

const CardSection = () => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        })
      },
      {
        threshold: 0.75,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        height: 400,
      }}
    >
      {inView && (
        <>
          <AppearBottom>
            <Card />
          </AppearBottom>
          <AppearBottom delay={0.6}>
            <Card
              title="SaaS에서 자주 쓰이는 기획 용어집"
              date="2024년 1월 2일 생성"
            />
          </AppearBottom>
        </>
      )}
    </div>
  )
}

export default CardSection
