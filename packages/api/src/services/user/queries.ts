import {
  MutationOptions,
  useMutation,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { CustomQueryOptions, Tokens } from '../../shared/type'

import { userService } from './service'
import { OnboardingDTO, OnboardingResponse, UserInfoResponse } from './model'

export const options = {
  getUserInfo: (token: Tokens) => ({
    queryKey: [],
    queryFn: () => userService.userInfo(token),
  }),
  onboarding: (dto: OnboardingDTO) => ({
    mutationFn: () => userService.onboarding(dto),
  }),
}

export const useUserInfoQuery = (
  token: Tokens,
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useQuery<UserInfoResponse>({
    ...options.getUserInfo(token),
    ...queryOptions,
  })
}

export const useUserInfoSuspenseQuery = (
  token: Tokens,
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useSuspenseQuery<UserInfoResponse>({
    ...options.getUserInfo(token),
    ...queryOptions,
  })
}

export const useOnboardingMutation = (
  dto: OnboardingDTO,
  queryOptions: MutationOptions<OnboardingResponse> = {},
) => {
  return useMutation<OnboardingResponse>({
    ...options.onboarding(dto),
    ...queryOptions,
  })
}
