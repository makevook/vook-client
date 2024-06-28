import { Dropbox, Icon, Text } from '@vook-client/design-system'

import { useModal } from '@/hooks/useModal'
import {
  WorkspaceDeleteModal,
  WorkspaceEditModal,
} from '@/modals/WorkspaceModal/WorkspaceModal'
import { ModalTypes } from '@/hooks/useModal/useModal'

import {
  dropboxItem,
  vocabularyItemContainer,
  vocabularyItemFooter,
  vocabularyItemHeader,
} from './VocabularyItem.css'
import { ModalDataType } from './page'

interface VocabularyItem {
  id: string
  name: string
  createdAt: Date
  setModalData: React.Dispatch<React.SetStateAction<ModalDataType>>
}

export const VocabularyItem = ({
  id,
  name,
  createdAt,
  setModalData,
}: VocabularyItem) => {
  const { toggleModal, open, type, setModal } = useModal()

  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <div className={vocabularyItemContainer}>
        <div className={vocabularyItemHeader}>
          <Text type="heading-1" fontWeight="bold">
            {name}
          </Text>
        </div>
        <div className={vocabularyItemFooter}>
          <Text type="body-2" color="semantic-label-alternative">
            {formatter.format(createdAt)} 생성
          </Text>
          <Dropbox>
            <Dropbox.Trigger>
              <Icon name="dot-vertical-medium" />
            </Dropbox.Trigger>
            <Dropbox.Group horizontal="right" vertical="bottom">
              <Dropbox.Option
                onClick={() => {
                  setModalData({
                    uid: id,
                    defaultValue: name,
                  })
                  setModal(ModalTypes.EDIT)
                  toggleModal()
                }}
              >
                <div className={dropboxItem} id={id}>
                  <Icon name="edit-medium" />
                  <Text type="body-2">수정</Text>
                </div>
              </Dropbox.Option>
              <Dropbox.Option
                onClick={() => {
                  setModalData({
                    uid: id,
                    defaultValue: name,
                  })
                  setModal(ModalTypes.DELETE)
                  toggleModal()
                }}
              >
                <div className={dropboxItem}>
                  <Icon name="trash-medium" />
                  <Text type="body-2">삭제</Text>
                </div>
              </Dropbox.Option>
            </Dropbox.Group>
          </Dropbox>
        </div>
      </div>
      {open && type === ModalTypes.DELETE && <WorkspaceDeleteModal uid={id} />}
      {open && type === ModalTypes.EDIT && (
        <WorkspaceEditModal uid={id} defaultValue={name} />
      )}
    </>
  )
}
