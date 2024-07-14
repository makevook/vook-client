import React from 'react'
import { Text } from '@vook-client/design-system'

import { Card } from '../../_component/Card'

import {
  detailBannerSection,
  displayContainer,
  displaySection,
  displayTermHeader,
  displayTermHeaderItem,
  displayTermItem,
  extensionSection,
  workspaceSection,
} from './DetailBanner.css'
import { BannerIcons } from './Icons'
import { DeviceScreen } from './_components'

const TableItem = ({ term, synom }: { term: string; synom: string }) => (
  <div className={displayTermItem}>
    <div className={displayTermHeaderItem}>
      <BannerIcons.CheckItem />
    </div>
    <div className={displayTermHeaderItem} style={{ width: 220 }}>
      <Text type="body-2-reading" color="semantic-primary-normal">
        {term}
      </Text>
    </div>
    <div className={displayTermHeaderItem}>
      <Text type="body-2-reading" color="semantic-label-alternative">
        {synom}
      </Text>
    </div>
  </div>
)

export const DetailBanner = () => {
  return (
    <div className={detailBannerSection}>
      <div className={extensionSection}>
        <BannerIcons.PointerIcon />
        <Text
          type="heading-1"
          fontWeight="medium"
          color="semantic-label-alternative"
          style={{ marginBottom: 16 }}
        >
          Chrome Extension
        </Text>
        <Text
          type="display-2"
          fontWeight="bold"
          color="common-black"
          style={{ marginBottom: 36 }}
        >
          드래그 한 번으로 뜻 확인
        </Text>

        <div style={{ height: 500 }} />

        <DeviceScreen />
      </div>

      <div style={{ display: 'flex', width: '100%', gap: 20 }}>
        <div className={workspaceSection}>
          <BannerIcons.WorkspaceIcon />
          <Text
            type="heading-1"
            fontWeight="medium"
            color="semantic-label-alternative"
            style={{ marginBottom: 16 }}
          >
            My Workspace
          </Text>
          <Text
            type="display-2"
            fontWeight="bold"
            color="common-black"
            style={{ marginBottom: 36 }}
          >
            주제별로 깔끔하게 관리
          </Text>

          <Card />
          <Card
            title="SaaS에서 자주 쓰이는 기획 용어집"
            date="2024년 1월 2일 생성"
          />
        </div>

        <div className={displaySection}>
          <div className={displayContainer}>
            <div style={{ padding: '8px 0' }}>
              <Text type="title-3" fontWeight="bold">
                비개발자를 위한 용어집
              </Text>
            </div>
            <div>
              <div style={{ display: 'flex', gap: 5 }}>
                <Text type="body-1" fontWeight="bold">
                  👀 용어 목록
                </Text>
                <Text type="body-1" color="semantic-label-alternative">
                  12
                </Text>
              </div>
              <div className={displayTermHeader}>
                <div className={displayTermHeaderItem}>
                  <BannerIcons.CheckItem />
                </div>
                <div className={displayTermHeaderItem} style={{ width: 220 }}>
                  <Text
                    type="body-2-reading"
                    fontWeight="medium"
                    color="semantic-label-alternative"
                  >
                    용어
                  </Text>
                </div>
                <div className={displayTermHeaderItem}>
                  <Text
                    type="body-2-reading"
                    fontWeight="medium"
                    color="semantic-label-alternative"
                  >
                    동의어
                  </Text>
                </div>
              </div>

              <TableItem term="가상화" synom="Virtualization" />
              <TableItem term="객체 지향 프로그래밍" synom="OOP" />
              <TableItem term="기본 키" synom="Primary Key" />
              <TableItem term="객체" synom="Object" />
              <TableItem term="네이티브 앱" synom="Native App" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
