import { Dropbox, Icon, Text } from '@vook-client/design-system'

import {
  dropboxItem,
  vocabularyItemContainer,
  vocabularyItemFooter,
  vocabularyItemHeader,
} from './VocabularyItem.css'

interface VocabularyItem {
  id: string
  name: string
  createdAt: Date
}

export const VocabularyItem = ({ id, name, createdAt }: VocabularyItem) => {
  return (
    <div className={vocabularyItemContainer}>
      <div className={vocabularyItemHeader}>
        <Text type="heading-1" fontWeight="bold">
          {name}
        </Text>
      </div>
      <div className={vocabularyItemFooter}>
        <Text type="body-2" color="semantic-label-alternative">
          {createdAt.toISOString()}
        </Text>
        <Dropbox>
          <Dropbox.Trigger>
            <Icon name="dot-vertical-medium" />
          </Dropbox.Trigger>
          <Dropbox.Group horizontal="right" vertical="bottom">
            <Dropbox.Option>
              <div className={dropboxItem} id={id}>
                <Icon name="edit-medium" />
                <Text type="body-2">수정</Text>
              </div>
            </Dropbox.Option>
            <Dropbox.Option>
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
