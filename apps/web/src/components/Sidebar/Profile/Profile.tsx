import { UserInfoResponse } from '@vook-client/api'
import { Icon, Dropbox, SymbolLogo, Text } from '@vook-client/design-system'

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

      <Dropbox>
        <Dropbox.Trigger>
          <div className={profileDropboxTrigger}>
            <Icon name="setting-medium" />
          </div>
        </Dropbox.Trigger>
        <Dropbox.Group horizontal="right" vertical="top">
          <Dropbox.Option>
            <div className={profileSettingItem}>
              <Icon name="user-medium" />
              <Text type="body-2">프로필</Text>
            </div>
          </Dropbox.Option>
          <Dropbox.Option>
            <div className={profileSettingItem}>
              <Icon name="download-medium" />
              <Text type="body-2">확장 프로그램 다운</Text>
            </div>
          </Dropbox.Option>
          <Dropbox.Option>
            <div className={profileSettingItem}>
              <Icon name="logout-medium" />
              <Text type="body-2">로그아웃</Text>
            </div>
          </Dropbox.Option>
        </Dropbox.Group>
      </Dropbox>
    </div>
  )
}
