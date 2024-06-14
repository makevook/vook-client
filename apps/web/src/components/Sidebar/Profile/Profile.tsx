import { UserInfoResponse } from '@vook-client/api'
import { Icon, Select, SymbolLogo, Text } from '@vook-client/design-system'

import {
  profile,
  profileDropboxTrigger,
  profileNickname,
  profileSettingItem,
} from './Profile.css'

interface ProfileProps {
  user: UserInfoResponse['result']
}

export const Profile = ({ user }: ProfileProps) => {
  return (
    <div className={profile}>
      <div className={profileNickname}>
        <SymbolLogo size={24} />
        <Text type="body-2" color="label-neutral">
          {user.nickname}
        </Text>
      </div>

      <Select>
        <Select.Trigger>
          <div className={profileDropboxTrigger}>
            <Icon name="setting-medium" />
          </div>
        </Select.Trigger>
        <Select.Group horizontal="right" vertical="top">
          <Select.Option>
            <div className={profileSettingItem}>
              <Icon name="user-medium" />
              <Text type="body-2">프로필</Text>
            </div>
          </Select.Option>
          <Select.Option>
            <div className={profileSettingItem}>
              <Icon name="download-medium" />
              <Text type="body-2">확장 프로그램 다운</Text>
            </div>
          </Select.Option>
          <Select.Option>
            <div className={profileSettingItem}>
              <Icon name="logout-medium" />
              <Text type="body-2">로그아웃</Text>
            </div>
          </Select.Option>
        </Select.Group>
      </Select>
    </div>
  )
}
