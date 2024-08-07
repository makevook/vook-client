'use client'

import { Button, Input, Text } from '@vook-client/design-system'
import { useEditUserMutation, useUserInfoQuery } from '@vook-client/api'
import { useEffect, useLayoutEffect, useState } from 'react'

import { useModal } from '@/hooks/useModal'
import { useUser } from '@/store/user'
import { useToast } from '@/hooks/useToast'

import {
  profileEditForm,
  profileEditFormButtonField,
  profileEditFormInputField,
  profileEditFormWithdrawLink,
} from './ProfileEditForm.css'

import { WithdrawModal } from 'src/modals/WithdrawModal'

export const ProfileEditForm = () => {
  const { user, setUser } = useUser()
  const { toggleModal, open } = useModal()
  const { addToast } = useToast()

  const [isValid, setIsValid] = useState(false)
  const [nickname, setNickname] = useState(user.nickname)

  const userEditMutation = useEditUserMutation(
    {
      nickname: nickname.trim(),
    },
    {
      onSuccess: () => {
        setUser({
          ...user,
          nickname,
        })
        addToast({
          message: '저장이 완료되었습니다.',
          type: 'success',
        })
      },
    },
  )

  const userInfo = useUserInfoQuery({
    enabled: false,
  })

  useLayoutEffect(
    function setDefaultNickname() {
      setNickname(user.nickname)
    },
    [user.nickname],
  )

  useEffect(
    function checkValidateNickname() {
      const isBlankNickname = nickname.trim().length === 0
      const isSameNickname = nickname === user?.nickname

      if (isBlankNickname || isSameNickname) {
        setIsValid(false)
        return
      }

      setIsValid(true)
    },
    [nickname, user?.nickname],
  )

  const onClickWithdraw = () => {
    toggleModal()
  }

  const onClickSave = () => {
    userEditMutation.mutate()
    userInfo.refetch()
  }

  return (
    <>
      <form className={profileEditForm}>
        <Text type="title-2" color="label-neutral" fontWeight="bold">
          프로필 수정
        </Text>
        <fieldset className={profileEditFormInputField}>
          <Input icon="google" label="구글 계정" value={user.email} disabled />
          <Input
            value={nickname}
            maxLength={10}
            onChange={(e) => setNickname(e.target.value)}
            label="닉네임"
          />
        </fieldset>
        <fieldset className={profileEditFormButtonField}>
          <Button
            onClick={onClickSave}
            disabled={!isValid || userEditMutation.isPending}
          >
            저장하기
          </Button>
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
