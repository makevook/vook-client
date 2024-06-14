import { UserInfoResponse } from '@vook-client/api'
import { create } from 'zustand'

interface UserState {
  user: UserInfoResponse['result'] | null
  setUser: (newUser: UserInfoResponse['result'] | null) => void
}

export const searchStore = create<UserState>((set) => ({
  user: null,
  setUser: (newUser) => set(() => ({ user: newUser })),
}))

export const useUserInfo = () => {
  const { user } = searchStore()
  return { user }
}

export const useSetUserInfo = () => {
  const { setUser } = searchStore()
  return { setUser }
}
