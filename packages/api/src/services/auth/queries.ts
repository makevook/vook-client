import {
  MutationOptions,
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

import { authService } from './service'
import { SignUpDTO, SignUpResponse } from './model'

export const authOptions = {
  register: (client: QueryClient, dto: SignUpDTO) => ({
    mutationFn: () => authService.register(client, dto),
  }),
  reRegister: (client: QueryClient, dto: SignUpDTO) => ({
    mutationFn: () => authService.reRegister(client, dto),
  }),
  withdraw: (client: QueryClient) => ({
    mutationFn: () => authService.withdraw(client),
  }),
}

export const useReRegisterMutation = (
  dto: SignUpDTO,
  options: MutationOptions<SignUpResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<SignUpResponse>({
    ...authOptions.reRegister(queryClient, dto),
    ...options,
  })
}

export const useSignUpMutation = (
  dto: SignUpDTO,
  options: MutationOptions<SignUpResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<SignUpResponse>({
    ...authOptions.register(queryClient, dto),
    ...options,
  })
}

export const useWithdrawMutation = (options: MutationOptions<unknown> = {}) => {
  const queryClient = useQueryClient()

  return useMutation<unknown>({
    ...authOptions.withdraw(queryClient),
    ...options,
  })
}
