import { Dropbox, Icon, Text } from '@vook-client/design-system'

import { useModal } from '@/hooks/useModal'
import { ModalTypes } from '@/hooks/useModal/useModal'

import {
  dropboxItem,
  vocabularyItemContainer,
  vocabularyItemFooter,
  vocabularyItemHeader,
} from './VocabularyItem.css'
import { VocabularyModalDataType } from './page'

interface VocabularyItem {
  id: string
  name: string
  createdAt: Date
  setModalData: React.Dispatch<React.SetStateAction<VocabularyModalDataType>>
}

export const VocabularyItem = ({
  id,
  name,
  createdAt,
  setModalData,
}: VocabularyItem) => {
  const { toggleModal, setModal } = useModal()

  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
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
              onClick={(e) => {
                e.stopPropagation()
                setModalData({
                  uid: id,
                  defaultValue: name,
                })
                setModal(ModalTypes.VocaEdit)
                toggleModal()
              }}
            >
              <div className={dropboxItem}>
                <Icon name="edit-medium" />
                <Text type="body-2">수정</Text>
              </div>
            </Dropbox.Option>
            <Dropbox.Option
              onClick={(e) => {
                e.stopPropagation()
                setModalData({
                  uid: id,
                  defaultValue: name,
                })
                setModal(ModalTypes.VocaDelete)
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
  )
}
