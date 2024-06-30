'use client'

import { Button, Icon, Text } from '@vook-client/design-system'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import { useWorkspace } from '@/store/workspace'

import {
  warningContainer,
  workspaceContainer,
  workspaceHeader,
} from './layout.css'
import WorkspaceList from './workspace/page'

const Home = () => {
  const { workspace } = useWorkspace()
  const { toggleModal, setModal } = useModal()
  const isDisabled = workspace.length === 3
  return (
    <div className={workspaceContainer}>
      <div className={workspaceHeader}>
        <Text type="title-2" fontWeight="bold" color="label-neutral">
          MY WORKSPACE
        </Text>
        <Button
          prefixIcon={isDisabled ? undefined : 'plus-big'}
          filled={isDisabled}
          blueLine={isDisabled}
          disabled={isDisabled}
          onClick={() => {
            setModal(ModalTypes.VocaCreate)
            toggleModal()
          }}
        >
          용어집 생성
        </Button>
      </div>
      {isDisabled && (
        <div className={warningContainer}>
          <Icon name="alert-warning-big" />
          <Text type="body-1" fontWeight="medium" color="label-neutral">
            용어집은 3개까지만 생성 가능합니다.
          </Text>
        </div>
      )}
      <WorkspaceList />

      {/* <Search /> */}
      {/* <Term /> */}
    </div>
  )
}

export default Home
