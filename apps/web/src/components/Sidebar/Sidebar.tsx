'use client'

import { useUser } from '@/store/user'
import { useWorkspace } from '@/store/workspace'

import { Profile } from './Profile/Profile'
import { sideBar, sideBarWorkspace, sideBarWorkspaceInner } from './Sidebar.css'
import { WorkspaceItem } from './WorkspaceItem'

export const Sidebar = () => {
  const { user } = useUser()
  const { workspace } = useWorkspace()

  const data = [
    {
      workspaceId: 'my-workspace',
      workspaceName: 'MY WORKSPACE',
      vocabularies: workspace.map((vocabulary) => ({
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
