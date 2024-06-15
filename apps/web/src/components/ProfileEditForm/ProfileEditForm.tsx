'use client'

import { Button, Input, Text } from '@vook-client/design-system'
import { useEditUserMutation, useUserInfoQuery } from '@vook-client/api'
import Cookies from 'js-cookie'
import { useEffect, useLayoutEffect, useState } from 'react'

import { useModal } from '@/hooks/useModal'
import { useUser } from '@/store/user'

import {
  profileEditForm,
  profileEditFormButtonField,
  profileEditFormInputField,
  profileEditFormWithdrawLink,
} from './ProfileEditForm.css'

import { WithdrawModal } from 'src/modals/WithdrawModal'
import { CompleteModal } from 'src/modals/CompleteModal/CompleteModal'

export const ProfileEditForm = () => {
  const access = Cookies.get('access') || ''
  const refresh = Cookies.get('refresh') || ''

  const { user, setUser } = useUser()
  const { toggleModal, open } = useModal()

  const [modalType, setModalType] = useState<'withdraw' | 'edit' | null>(null)
  const [isValid, setIsValid] = useState(false)
  const [nickname, setNickname] = useState(user.nickname)

  const userEditMutation = useEditUserMutation(
    {
      access,
      refresh,
    },
    {
      nickname,
    },
    {
      onSuccess: () => {
        setModalType('edit')
        setUser({
          ...user,
          nickname,
        })
        toggleModal()
      },
    },
  )

  const userInfo = useUserInfoQuery(
    {
      access,
      refresh,
    },
    {
      enabled: false,
    },
  )

  useLayoutEffect(
    function setDefaultNickname() {
      setNickname(user.nickname)
    },
    [user.nickname],
  )

  useEffect(
    function checkValidateNickname() {
      const isBlankNickname = nickname.length === 0
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
    setModalType('withdraw')
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
            onChange={(e) => setNickname(e.target.value)}
            label="닉네임"
          />
        </fieldset>
        <fieldset className={profileEditFormButtonField}>
          <Button
            onClick={onClickSave}
            prefixIcon={
              userEditMutation.isPending ? 'spinner-medium' : undefined
            }
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
      {open && modalType === 'withdraw' && <WithdrawModal />}
      {open && modalType === 'edit' && (
        <CompleteModal completeMessage="저장이 완료되었습니다." />
      )}
    </>
  )
}
