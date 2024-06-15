'use client'

import { Text } from '@vook-client/design-system'

import { useUser } from '@/store/user'

import { Profile } from './Profile/Profile'
import { sideBar, sideBarWorkspace, sideBarWorkspaceInner } from './Sidebar.css'
import { WorkspaceItem } from './WorkspaceItem'

const DUMMY_WORKSPACES = [
  {
    workspaceId: 'workspace-1',
    workspaceName: 'Workspace 1',
    vocabularies: [
      {
        id: 'vocabulary-1',
        name: 'Terms1',
      },
      {
        id: 'vocabulary-2',
        name: 'Terms2',
      },
    ],
  },
  {
    workspaceId: 'workspace-2',
    workspaceName: 'Workspace 2',
    vocabularies: [
      {
        id: 'vocabulary-3',
        name: 'Terms3',
      },
      {
        id: 'vocabulary-4',
        name: 'Terms4',
      },
    ],
  },
]

export const Sidebar = () => {
  const { user } = useUser()

  return (
    <aside className={sideBar}>
      <div className={sideBarWorkspace}>
        <Text as="h2" type="caption-1" color="semantic-label-assistive">
          MY WORKSPACE
        </Text>
        <div className={sideBarWorkspaceInner}>
          {DUMMY_WORKSPACES.map((workspace) => (
            <WorkspaceItem key={workspace.workspaceId} {...workspace} />
          ))}
        </div>
      </div>
      <Profile user={user} />
    </aside>
  )
}
