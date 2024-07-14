'use client'

import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Icon, Text } from '@vook-client/design-system'
import { motion } from 'framer-motion'

import { BannerIcons } from '../Icons/index'

import {
  chromeExtensionContainer,
  chromeExtensionFooter,
  chromeExtensionHeader,
  chromeExtensionTable,
  chromeExtensionTableContainer,
  chromeExtensionTableHeaderText,
  deviceScreen,
  deviceScreenHeader,
  deviceScreenText,
  deviceScreenURL,
  deviceScreenURLHeader,
  drag,
  dragInner,
  vookLogoContainer,
} from './DeviceScreen.css'

const DragAnimation = () => {
  return (
    <motion.p
      className={dragInner}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.6 }}
    />
  )
}

const ExtensionAnimation = ({ children }: PropsWithChildren) => (
  <motion.div
    className={chromeExtensionContainer}
    initial={{ y: 23, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
  >
    {children}
  </motion.div>
)

const LogoAnimation = ({ children }: PropsWithChildren) => (
  <motion.div
    className={vookLogoContainer}
    initial={{ y: 16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.1, type: 'spring', stiffness: 100 }}
  >
    {children}
  </motion.div>
)

export const DeviceScreen = () => {
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
        threshold: 0.9,
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
    <div className={deviceScreen} ref={ref}>
      <div className={deviceScreenHeader}>
        <BannerIcons.ChevronDown />
      </div>

      <div className={deviceScreenURLHeader}>
        <div className={deviceScreenURL}>
          <BannerIcons.Star />
          <BannerIcons.Share />
        </div>
        <BannerIcons.Vook />
        <BannerIcons.Extension />
        <BannerIcons.Toggle />
        <BannerIcons.More />
      </div>

      <div className={deviceScreenText}>
        <Text type="heading-1">
          가상화 기술은 현대 IT 인프라에서 중요한 역할을 하고 있습니다.
          {'\n'}
          {'\n'}
          서버 자원을 효율적으로 사용하여 비용을 절감할 수 있으며{'\n'}
          많은 기업들이{' '}
          <div className={drag}>
            {inView && <DragAnimation />}
            가상화 솔루션을 도입하여
          </div>{' '}
          운영 효율성을 극대화하고 있습니다.
        </Text>
      </div>

      {inView && (
        <div>
          <LogoAnimation>
            <BannerIcons.VookLogo />
          </LogoAnimation>

          <ExtensionAnimation>
            <div className={chromeExtensionHeader}>
              <BannerIcons.VookLogo />
              <Icon name="close-icon-big" />
            </div>
            <div className={chromeExtensionTableContainer}>
              <div style={{ display: 'flex' }}>
                <Text type="body-2" className={chromeExtensionTableHeaderText}>
                  용어
                </Text>
                <Text type="body-2" className={chromeExtensionTableHeaderText}>
                  동의어
                </Text>
                <Text
                  type="body-2"
                  className={chromeExtensionTableHeaderText}
                  style={{ flex: 1 }}
                >
                  뜻
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                <Text
                  type="body-2"
                  color="semantic-primary-normal"
                  className={chromeExtensionTable}
                >
                  가상화
                </Text>
                <Text
                  type="body-2"
                  color="semantic-label-alternative"
                  className={chromeExtensionTable}
                >
                  Virtualization
                </Text>
                <Text
                  type="body-2"
                  className={chromeExtensionTable}
                  style={{ flex: 1 }}
                >
                  하나의 컴퓨터를 여러 개의 가상 컴퓨터처럼{'\n'}
                  사용할 수 있도록 하는 기술
                </Text>
              </div>
            </div>

            <div className={chromeExtensionFooter}>
              <Text type="body-1" color="status-info">
                Vook 바로가기
              </Text>
              <Icon name="link-external-medium" />
            </div>
          </ExtensionAnimation>
        </div>
      )}
    </div>
  )
}
