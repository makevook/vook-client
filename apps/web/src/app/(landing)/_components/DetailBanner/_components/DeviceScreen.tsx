import React from 'react'
import { Icon, Text } from '@vook-client/design-system'

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
  VookLogoContainer,
} from './DeviceScreen.css'

export const DeviceScreen = () => {
  return (
    <div className={deviceScreen}>
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
          많은 기업들이 <span className={drag}>
            가상화 솔루션을 도입하여
          </span>{' '}
          운영 효율성을 극대화하고 있습니다.
        </Text>
      </div>

      <div className={VookLogoContainer}>
        <BannerIcons.VookLogo />
      </div>

      <div className={chromeExtensionContainer}>
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
      </div>
    </div>
  )
}
