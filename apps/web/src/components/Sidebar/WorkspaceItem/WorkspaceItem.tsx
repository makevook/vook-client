import { Accordion, Dropbox, Icon, Text } from '@vook-client/design-system'

import {
  vocabularyDropbox,
  vocabularyDropboxItem,
  workspaceItem,
  workspaceItemTitle,
} from './WorkspaceItem.css'

interface WorkspaceItemProps {
  workspaceId: string
  workspaceName: string
  vocabularies: {
    id: string
    name: string
  }[]
}

export const WorkspaceItem = ({
  workspaceName,
  vocabularies,
}: WorkspaceItemProps) => {
  return (
    <Accordion>
      <div className={workspaceItemTitle}>
        <Accordion.Title>
          <div>
            <Text type="body-2">{workspaceName}</Text>
          </div>
        </Accordion.Title>
        <Dropbox>
          <Dropbox.Trigger>
            <Icon name="dot-vertical-medium" />
          </Dropbox.Trigger>
          <Dropbox.Group horizontal="right" vertical="bottom">
            <Dropbox.Option>
              <div className={vocabularyDropboxItem} id="hi">
                <Icon name="edit-medium" />
                <Text type="body-2">수정</Text>
              </div>
            </Dropbox.Option>
            <Dropbox.Option>
              <div className={vocabularyDropboxItem}>
                <Icon name="trash-medium" />
                <Text type="body-2">삭제</Text>
              </div>
            </Dropbox.Option>
          </Dropbox.Group>
        </Dropbox>
      </div>
      {vocabularies.map((vocabulary) => (
        <div key={vocabulary.id} className={workspaceItem}>
          <Accordion.Item>
            <div>
              <Text type="body-2">{vocabulary.name}</Text>
            </div>
          </Accordion.Item>
          <div className={vocabularyDropbox}>
            <Dropbox>
              <Dropbox.Trigger>
                <div>
                  <Icon name="dot-vertical-medium" />
                </div>
              </Dropbox.Trigger>
              <Dropbox.Group horizontal="right" vertical="bottom">
                <Dropbox.Option>
                  <div className={vocabularyDropboxItem} id="hi">
                    <Icon name="edit-medium" />
                    <Text type="body-2">수정</Text>
                  </div>
                </Dropbox.Option>
                <Dropbox.Option>
                  <div className={vocabularyDropboxItem}>
                    <Icon name="trash-medium" />
                    <Text type="body-2">삭제</Text>
                  </div>
                </Dropbox.Option>
              </Dropbox.Group>
            </Dropbox>
          </div>
        </div>
      ))}
    </Accordion>
  )
}
