import {
  MutationOptions,
  useMutation,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { CustomQueryOptions, Tokens } from '../../shared/type'

import { userService } from './service'
import {
  OnboardingDTO,
  OnboardingResponse,
  UserEditDTO,
  UserEditResponse,
  UserInfoResponse,
} from './model'

export const userOptions = {
  userInfo: (token: Tokens) => ({
    queryKey: [],
    queryFn: () => userService.userInfo(token),
  }),
  onboarding: (dto: OnboardingDTO) => ({
    mutationFn: () => userService.onboarding(dto),
  }),
  editUser: (token: Tokens, dto: UserEditDTO) => ({
    mutationFn: () => userService.editUser(token, dto),
  }),
}

export const useUserInfoQuery = (
  token: Tokens,
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useQuery<UserInfoResponse>({
    ...userOptions.userInfo(token),
    ...queryOptions,
  })
}

export const useUserInfoSuspenseQuery = (
  token: Tokens,
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useSuspenseQuery<UserInfoResponse>({
    ...userOptions.userInfo(token),
    ...queryOptions,
  })
}

export const useOnboardingMutation = (
  dto: OnboardingDTO,
  queryOptions: MutationOptions<OnboardingResponse> = {},
) => {
  return useMutation<OnboardingResponse>({
    ...userOptions.onboarding(dto),
    ...queryOptions,
  })
}

export const useEditUserMutation = (
  token: Tokens,
  dto: UserEditDTO,
  MutationOptions: MutationOptions<UserEditResponse> = {},
) => {
  return useMutation({
    ...userOptions.editUser(token, dto),
    ...MutationOptions,
  })
}
