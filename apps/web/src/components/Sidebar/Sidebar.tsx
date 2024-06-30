'use client'

import { useVacabularyInfoQuery } from '@vook-client/api'

import { useUser } from '@/store/user'

import { Profile } from './Profile/Profile'
import { sideBar, sideBarWorkspace, sideBarWorkspaceInner } from './Sidebar.css'
import { WorkspaceItem } from './WorkspaceItem'

export const Sidebar = () => {
  const { user } = useUser()
  const { data: response } = useVacabularyInfoQuery()

  if (response == null) {
    return null
  }

  const data = [
    {
      workspaceId: 'my-workspace',
      workspaceName: 'MY WORKSPACE',
      vocabularies: response.result.map((vocabulary) => ({
        id: vocabulary.uid,
        name: vocabulary.name,
      })),
    },
  ]

  return (
    <aside className={sideBar}>
      <div className={sideBarWorkspace}>
        {/* <Text as="h2" type="caption-1" color="semantic-label-assistive">
          MY WORKSPACE
        </Text> */}
        <div className={sideBarWorkspaceInner}>
          {data.map((vocabulary) => (
            <WorkspaceItem key={vocabulary.workspaceId} {...vocabulary} />
          ))}
        </div>
      </div>
      <Profile user={user} />
    </aside>
  )
}
