import { Accordion, Text } from '@vook-client/design-system'
import { usePathname, useRouter } from 'next/navigation'

import {
  vocabularyTitle,
  workSpaceItemTextContainer,
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
  const router = useRouter()
  const path = usePathname()
  const id = path.split('/').pop()

  return (
    <Accordion>
      <div className={workspaceItemTitle}>
        <div className={workSpaceItemTextContainer}>
          <Accordion.Title>
            <Text type="body-2" color="inherit">
              {workspaceName}
            </Text>
          </Accordion.Title>
        </div>
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
      {vocabularies.map((vocabulary) => {
        const isSelected = id === vocabulary.id
        return (
          <div key={vocabulary.id} className={vocabularyTitle}>
            <div className={workSpaceItemTextContainer}>
              <Accordion.Item
                onClick={() => {
                  router.push(`/vocabulary/${vocabulary.id}`)
                }}
                isFilled={isSelected}
              >
                <Text
                  type="body-2"
                  color={isSelected ? 'semantic-primary-normal' : 'inherit'}
                >
                  {vocabulary.name}
                </Text>
              </Accordion.Item>
            </div>
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
        )
      })}
    </Accordion>
  )
}
