import { UserInfoResponse } from '@vook-client/api'
import { SymbolLogo, Text } from '@vook-client/design-system'

import { profile, profileNickname } from './Profile.css'
import ProfileDropbox from './ProfileDropbox/ProfileDropbox'

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
      <ProfileDropbox />
    </div>
  )
}
