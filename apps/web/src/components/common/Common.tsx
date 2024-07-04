import React, { PropsWithChildren } from 'react'
import {
  Button,
  Icon,
  SymbolLogo,
  Text,
  TypoLogo,
} from '@vook-client/design-system'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'

import { flexAlignCenter } from '../layout/Layout.css'

import {
  noTermContainer,
  spinner,
  warningContainer,
  workspaceInnerAlignCenter,
  workspaceInnerContainer,
} from './common.css'

export const Logo = () => (
  <div className={flexAlignCenter}>
    <SymbolLogo size={24} />
    <TypoLogo size="small" />
  </div>
)

export const Hyperlink = ({
  url,
  children,
}: {
  url: string
  children: React.ReactNode
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export const LoadingComponent = () => (
  <div className={noTermContainer}>
    <div className={spinner} />
  </div>
)

export const WarnBox = ({ children }: PropsWithChildren) => (
  <div className={warningContainer}>
    <Icon name="alert-warning-big" />
    <Text type="body-1" fontWeight="medium" color="label-neutral">
      {children}
    </Text>
  </div>
)

export const NoneDataComponent = ({
  type,
}: {
  type: 'vocabulary' | 'term'
}) => {
  const { setModal, toggleModal } = useModal()
  return (
    <div className={workspaceInnerContainer}>
      <div className={workspaceInnerAlignCenter}>
        <Text type="body-1" fontWeight="medium" color="label-alternative">
          {type === 'term' && '등록된 용어가 없습니다.'}
          {type === 'vocabulary' && '등록된 용어집이 없습니다.'}
        </Text>
        <Button
          onClick={() => {
            setModal(ModalTypes.CREATE)
            toggleModal()
          }}
          prefixIcon="plus-small"
          filled={false}
          blueLine={false}
          size="small"
        >
          <Text type="label" fontWeight="bold">
            {type === 'term' && '용어 생성'}
            {type === 'vocabulary' && '용어집 생성'}
          </Text>
        </Button>
      </div>
    </div>
  )
}
