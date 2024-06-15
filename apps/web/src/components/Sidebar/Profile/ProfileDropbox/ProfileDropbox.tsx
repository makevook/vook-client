'use client'

import { Dropbox, Icon, Text } from '@vook-client/design-system'
import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useQueryClient } from '@tanstack/react-query'

import { profileDropboxTrigger, profileSettingItem } from '../Profile.css'

const ProfileDropbox = () => {
  const queryClient = useQueryClient()

  const onClickLogout = () => {
    Cookies.remove('access')
    Cookies.remove('refresh')
    queryClient.invalidateQueries({
      queryKey: ['access'],
    })
    queryClient.invalidateQueries({
      queryKey: ['refresh'],
    })
    location.href = '/login'
  }

  return (
    <Dropbox>
      <Dropbox.Trigger>
        <div className={profileDropboxTrigger}>
          <Icon name="setting-medium" />
        </div>
      </Dropbox.Trigger>
      <Dropbox.Group horizontal="right" vertical="top">
        <Link href="/user/edit">
          <Dropbox.Option>
            <div className={profileSettingItem}>
              <Icon name="user-medium" />
              <Text type="body-2">프로필</Text>
            </div>
          </Dropbox.Option>
        </Link>
        <Dropbox.Option>
          <div className={profileSettingItem}>
            <Icon name="download-medium" />
            <Text type="body-2">확장 프로그램 다운</Text>
          </div>
        </Dropbox.Option>
        <Dropbox.Option onClick={onClickLogout}>
          <div className={profileSettingItem}>
            <Icon name="logout-medium" />
            <Text type="body-2">로그아웃</Text>
          </div>
        </Dropbox.Option>
      </Dropbox.Group>
    </Dropbox>
  )
}

export default ProfileDropbox
