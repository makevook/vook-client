'use client'

import { Text } from '@vook-client/design-system'
import { UserInfoResponse } from '@vook-client/api'

import { sideBar } from './Sidebar.css'
import { Profile } from './Profile/Profile'

interface SidebarProps {
  user: UserInfoResponse['result']
}

export const Sidebar = ({ user }: SidebarProps) => {
  return (
    <aside className={sideBar}>
      <nav>
        <ul>
          <li>
            <Text type="heading-1">용어집 1</Text>
          </li>
          <li>
            <Text type="heading-1">용어집 2</Text>
          </li>
        </ul>
      </nav>
      <Profile user={user} />
    </aside>
  )
}
