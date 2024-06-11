import { MutationOptions, useMutation } from '@tanstack/react-query'

import { signUpService } from './signUpService'
import { SignUpDTO, SignUpResponse } from './model'

export const signUpQueryOptions = {
  register: (dto: SignUpDTO) => ({
    mutationFn: () => signUpService.register(dto),
  }),
}

export const useSignUpMutation = (
  dto: SignUpDTO,
  queryOptions: MutationOptions<SignUpResponse> = {},
) => {
  return useMutation<SignUpResponse>({
    ...signUpQueryOptions.register(dto),
    ...queryOptions,
  })
}
