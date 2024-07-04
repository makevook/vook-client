'use client'

import { Button, Text } from '@vook-client/design-system'
import { useVacabularyInfoQuery } from '@vook-client/api'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'
import { WarnBox } from '@/components/common/Common'

import { workspaceContainer, workspaceHeader } from './layout.css'
import WorkspaceList from './workspace/page'

const Home = () => {
  const { toggleModal, setModal } = useModal()
  const { data: response } = useVacabularyInfoQuery()

  if (response == null) {
    return null
  }
  const isDisabled = response?.result.length >= 3
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
            setModal(ModalTypes.CREATE)
            toggleModal()
          }}
        >
          용어집 생성
        </Button>
      </div>

      {isDisabled && <WarnBox>용어집은 3개까지만 생성 가능합니다.</WarnBox>}

      <WorkspaceList />
    </div>
  )
}

export default Home
