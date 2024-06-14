'use client'

import { Button, Input, Text } from '@vook-client/design-system'
import { useUserInfoQuery } from '@vook-client/api'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { useModal } from '@/hooks/useModal'

import {
  profileEditForm,
  profileEditFormButtonField,
  profileEditFormInputField,
  profileEditFormWithdrawLink,
} from './ProfileEditForm.css'

import { WithdrawModal } from 'src/modals/WithdrawModal'

export const ProfileEditForm = () => {
  const access = Cookies.get('access')
  const refresh = Cookies.get('refresh')

  const userInfoQuery = useUserInfoQuery({
    access: access || '',
    refresh: refresh || '',
  })

  const { toggleModal, open } = useModal()

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

  const onClickWithdraw = () => {
    toggleModal()
  }

  return (
    <>
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
          <Text
            type="body-1-reading"
            color="semantic-label-alternative"
            className={profileEditFormWithdrawLink}
            onClick={onClickWithdraw}
          >
            계정 탈퇴
          </Text>
        </fieldset>
      </form>
      {open && <WithdrawModal />}
    </>
  )
}
