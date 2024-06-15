'use client'

import { UserInfoResponse, UserStatus } from '@vook-client/api'
import { PropsWithChildren } from 'react'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface UserState {
  user: UserInfoResponse['result']
}

export interface UserActions {
  setUser: (newUser: UserInfoResponse['result']) => void
}

export type UserStore = UserState & UserActions

export const userStore = create(
  devtools<UserStore>((set) => ({
    user: {
      uid: '',
      email: '',
      nickname: '',
      status: UserStatus.SocialLoginCompleted,
      onboardingCompleted: false,
    },
    setUser: (newUser) =>
      set((prev) => ({
        ...prev,
        user: newUser,
      })),
  })),
)

export const UserProvider = ({
  user,
  children,
}: UserState & PropsWithChildren) => {
  userStore.setState({ user })

  return children
}

export const useUser = () => {
  const { user, setUser } = userStore()

  return { user, setUser }
}
