'use client'

import { Text, Accordion } from '@vook-client/design-system'
import { UserInfoResponse } from '@vook-client/api'

import { sideBar, sideBarWorkspace } from './Sidebar.css'
import { Profile } from './Profile/Profile'

interface SidebarProps {
  user: UserInfoResponse['result']
}

export const Sidebar = ({ user }: SidebarProps) => {
  return (
    <aside className={sideBar}>
      <nav className={sideBarWorkspace}>
        <Text as="h2" type="caption-1" color="semantic-label-assistive">
          MY WORKSPACE
        </Text>
        <Accordion title="Workspace 1">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
        <Accordion title="Workspace 2">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
        <Accordion title="Workspace 2">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
        <Accordion title="Workspace 2">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
        <Accordion title="Workspace 2">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
        <Accordion title="Workspace 2">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
        <Accordion title="Workspace 2">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
        <Accordion title="Workspace 2">
          <Accordion.Item>Terms1</Accordion.Item>
          <Accordion.Item>Terms2</Accordion.Item>
          <Accordion.Item>Terms3</Accordion.Item>
        </Accordion>
      </nav>
      <Profile user={user} />
    </aside>
  )
}
