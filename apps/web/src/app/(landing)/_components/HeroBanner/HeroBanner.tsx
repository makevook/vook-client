import React from 'react'
import { Button, Text } from '@vook-client/design-system'
import clsx from 'clsx'

import { AppearBottom } from '@/components/AppearBottom'

import {
  blueBlock,
  heroBannerSection,
  heroTitle,
  highlight,
  highlightBox,
  subTitle,
  yellowBlock,
  yellowFont,
} from './HeroBanner.css'

export const HeroBanner = () => {
  return (
    <div className={heroBannerSection}>
      <div className={heroTitle}>
        <AppearBottom>
          <Text as="h1" type="display-1" color="common-black" fontWeight="bold">
            IT 용어를 가장{'  '}
          </Text>
        </AppearBottom>
        <AppearBottom delay={0.3}>
          <div className={highlightBox}>
            <div className={clsx([highlight, yellowBlock])} />
            <Text
              as="strong"
              type="display-1"
              fontWeight="bold"
              className={yellowFont}
            >
              쉽고{'  '}
            </Text>
          </div>
        </AppearBottom>
        <AppearBottom delay={0.6}>
          <div className={highlightBox}>
            <div className={clsx([highlight, blueBlock])} />
            <Text
              as="strong"
              type="display-1"
              fontWeight="bold"
              color="semantic-primary-normal"
            >
              빠르게{' '}
            </Text>
          </div>
        </AppearBottom>
        <AppearBottom delay={0.9}>
          <Text as="h1" type="display-1" color="common-black" fontWeight="bold">
            찾는 방법
          </Text>
        </AppearBottom>
      </div>
      <AppearBottom delay={1.5}>
        <div className={subTitle}>
          <Text type="title-3" color="label-alternative" fontWeight="regular">
            용어집 관리부터 검색까지, 한 곳에서 해결하세요.
          </Text>
        </div>
      </AppearBottom>
      <AppearBottom delay={1.5}>
        <Button>무료로 시작하기</Button>
      </AppearBottom>
    </div>
  )
}
