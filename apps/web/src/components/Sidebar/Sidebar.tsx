import { Text, TypoLogo } from '@vook-client/design-system'

import { sideBar } from './Sidebar.css'

export const Sidebar = () => {
  return (
    <aside className={sideBar}>
      <div>
        <TypoLogo size="big" />
      </div>
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
    </aside>
  )
}
