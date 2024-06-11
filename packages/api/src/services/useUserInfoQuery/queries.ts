import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { userInfoService } from './searchService'
import { UserInfoResponse } from './model'

export const userInfoQueryOptions = {
  getUserInfo: () => ({
    queryKey: [],
    queryFn: () => userInfoService.getUserInfo(),
  }),
}

export const useUserInfoQuery = (
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useQuery<UserInfoResponse>({
    ...userInfoQueryOptions.getUserInfo(),
    ...queryOptions,
  })
}

export const useUserInfoSuspenseQuery = (
  queryOptions: CustomQueryOptions<UserInfoResponse> = {},
) => {
  return useSuspenseQuery<UserInfoResponse>({
    ...userInfoQueryOptions.getUserInfo(),
    ...queryOptions,
  })
}
