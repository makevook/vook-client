'use client'

import { Button, Input, Text } from '@vook-client/design-system'
import { useUserInfoQuery } from '@vook-client/api'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { Link } from '../Link'

import {
  profileEditForm,
  profileEditFormButtonField,
  profileEditFormInputField,
  profileEditFormWithdrawLink,
} from './ProfileEditForm.css'

export const ProfileEditForm = () => {
  const access = Cookies.get('access')
  const refresh = Cookies.get('refresh')

  const userInfoQuery = useUserInfoQuery({
    access: access || '',
    refresh: refresh || '',
  })

  const [nickname, setNickname] = useState(
    userInfoQuery.data?.result.nickname || '',
  )
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setNickname(userInfoQuery.data?.result.nickname || '')
  }, [userInfoQuery.data?.result.nickname])

  useEffect(() => {
    const isBlankNickname = nickname.length === 0
    const isSameNickname = nickname === userInfoQuery.data?.result.nickname

    if (isBlankNickname || isSameNickname) {
      setIsValid(false)
      return
    }
    setIsValid(true)
  }, [nickname, userInfoQuery.data?.result.nickname])

  if (!userInfoQuery.data) {
    return null
  }

  return (
    <form className={profileEditForm}>
      <Text type="title-2" color="label-neutral" fontWeight="bold">
        프로필 수정
      </Text>
      <fieldset className={profileEditFormInputField}>
        <Input
          icon="google"
          label="구글 계정"
          value={userInfoQuery.data.result.email}
          disabled
        />
        <Input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          label="닉네임"
        />
      </fieldset>
      <fieldset className={profileEditFormButtonField}>
        <Button disabled={!isValid}>저장하기</Button>
        <Link href="/">
          <Text
            type="body-1-reading"
            color="semantic-label-alternative"
            className={profileEditFormWithdrawLink}
          >
            계정 탈퇴
          </Text>
        </Link>
      </fieldset>
    </form>
  )
}
