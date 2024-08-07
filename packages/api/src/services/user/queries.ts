import {
  MutationOptions,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { userService } from './service'
import {
  OnboardingDTO,
  OnboardingResponse,
  UserEditDTO,
  UserEditResponse,
  UserInfoResponse,
} from './model'

export const userOptions = {
  userInfo: (client: QueryClient) => ({
    queryKey: [],
    staleTime: 0,
    queryFn: () => userService.userInfo(client),
  }),
  onboarding: (client: QueryClient, dto: OnboardingDTO) => ({
    mutationFn: () => userService.onboarding(client, dto),
  }),
  editUser: (client: QueryClient, dto: UserEditDTO) => ({
    mutationFn: () => userService.editUser(client, dto),
  }),
}

export const useUserInfoQuery = (
  options: CustomQueryOptions<UserInfoResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useQuery<UserInfoResponse>({
    ...userOptions.userInfo(queryClient),
    ...options,
  })
}

export const useOnboardingMutation = (
  dto: OnboardingDTO,
  options: MutationOptions<OnboardingResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<OnboardingResponse>({
    ...userOptions.onboarding(queryClient, dto),
    ...options,
  })
}

export const useEditUserMutation = (
  dto: UserEditDTO,
  options: MutationOptions<UserEditResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...userOptions.editUser(queryClient, dto),
    ...options,
  })
}
