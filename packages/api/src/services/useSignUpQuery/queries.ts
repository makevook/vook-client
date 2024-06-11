import { useQuery } from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { signUpService } from './signUpService'
import { SignUpDTO, SignUpResponse } from './model'

export const signUpQueryOptions = {
  getUserInfo: (dto: SignUpDTO) => ({
    queryKey: [],
    queryFn: () => signUpService.register(dto),
  }),
}

export const useSignUpQuery = (
  dto: SignUpDTO,
  queryOptions: CustomQueryOptions<SignUpResponse> = {},
) => {
  return useQuery<SignUpResponse>({
    ...signUpQueryOptions.getUserInfo(dto),
    ...queryOptions,
  })
}
