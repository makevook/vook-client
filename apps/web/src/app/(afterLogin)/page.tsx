'use client'

import { Button, Text } from '@vook-client/design-system'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'

import { workspaceContainer, workspaceHeader } from './layout.css'
import WorkspaceList from './workspace/page'

const Home = () => {
  const { toggleModal, setModal } = useModal()

  return (
    <div className={workspaceContainer}>
      <div className={workspaceHeader}>
        <Text type="title-2" fontWeight="bold">
          MY WORKSPACE
        </Text>
        <Button
          prefixIcon="plus-big"
          filled={false}
          blueLine={false}
          onClick={() => {
            setModal(ModalTypes.CREATE)
            toggleModal()
          }}
        >
          <Text type="body-1" fontWeight="bold">
            용어집 생성
          </Text>
        </Button>
      </div>
      <WorkspaceList />

      {/* <Search /> */}
      {/* <Term /> */}
    </div>
  )
}

export default Home
