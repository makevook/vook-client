import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

import { CustomQueryOptions, Tokens } from '../../shared/type'

import { userInfoService } from './userInfoService'
import { UserInfoResponse } from './model'

export const userInfoQueryOptions = {
  getUserInfo: (token: Tokens) => ({
    queryKey: [],
    queryFn: () => userInfoService.getUserInfo(token),
  }),
}

export const useUserInfoQuery = (
  token: Tokens,
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useQuery<UserInfoResponse>({
    ...userInfoQueryOptions.getUserInfo(token),
    ...queryOptions,
  })
}

export const useUserInfoSuspenseQuery = (
  token: Tokens,
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useSuspenseQuery<UserInfoResponse>({
    ...userInfoQueryOptions.getUserInfo(token),
    ...queryOptions,
  })
}
