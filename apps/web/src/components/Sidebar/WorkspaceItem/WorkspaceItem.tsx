import { Accordion, Text } from '@vook-client/design-system'
import { useRouter } from 'next/navigation'

import { vocabularyTitle, workspaceItemTitle } from './WorkspaceItem.css'

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
  const router = useRouter()

  return (
    <Accordion defaultOpen>
      <div className={workspaceItemTitle}>
        <Accordion.Title isSideBar>
          <div>
            <Text type="body-2">{workspaceName}</Text>
          </div>
        </Accordion.Title>
        {/* <Dropbox>
          <Dropbox.Trigger className={workspaceItemDropdownTrigger}>
            <Icon name="dot-vertical-medium" />
          </Dropbox.Trigger>
          <Dropbox.Group horizontal="right" vertical="bottom">
            <Dropbox.Option>
              <div className={workspaceItemDropdownItem} id="hi">
                <Icon name="edit-medium" />
                <Text type="body-2">수정</Text>
              </div>
            </Dropbox.Option>
            <Dropbox.Option>
              <div className={workspaceItemDropdownItem}>
                <Icon name="trash-medium" />
                <Text type="body-2">삭제</Text>
              </div>
            </Dropbox.Option>
          </Dropbox.Group>
        </Dropbox> */}
      </div>
      {vocabularies.map((vocabulary) => (
        <div key={vocabulary.id} className={vocabularyTitle}>
          <Accordion.Item
            onClick={() => {
              router.push(`/vocabulary/${vocabulary.id}`)
            }}
            isSideBar
          >
            <Text type="body-2">{vocabulary.name}</Text>
          </Accordion.Item>
          {/* <Dropbox>
            <Dropbox.Trigger className={vocabularyDropboxTrigger}>
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
          </Dropbox> */}
        </div>
      ))}
    </Accordion>
  )
}
