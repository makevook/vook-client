import { MutationOptions, useMutation } from '@tanstack/react-query'

import { authService } from './service'
import { SignUpDTO, SignUpResponse } from './model'

export const authOptions = {
  register: (dto: SignUpDTO) => ({
    mutationFn: () => authService.register(dto),
  }),
  withdraw: () => ({
    mutationFn: () => authService.withdraw(),
  }),
}

export const useSignUpMutation = (
  dto: SignUpDTO,
  queryOptions: MutationOptions<SignUpResponse> = {},
) => {
  return useMutation<SignUpResponse>({
    ...authOptions.register(dto),
    ...queryOptions,
  })
}

export const useWithdrawMutation = (
  queryOptions: MutationOptions<void> = {},
) => {
  return useMutation<void>({
    ...authOptions.withdraw(),
    ...queryOptions,
  })
}
