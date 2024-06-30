import {
  MutationOptions,
  QueryClient,
  QueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { termService } from './service'
import { AddTermDTO, AddTermResponse, GetTermResponse } from './model'

export const termOptions = {
  termInfo: (client: QueryClient, vocabularyUid: string) => ({
    queryKey: ['term'],
    queryFn: () => termService.getTerm(client, vocabularyUid),
  }),
  addTerm: (client: QueryClient, dto: AddTermDTO) => ({
    mutationFn: () => termService.addTerm(client, dto),
  }),
}

export const useGetTermQuery = (
  vocabularyUid: string,
  options: QueryOptions<GetTermResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useQuery<GetTermResponse>({
    ...termOptions.termInfo(queryClient, vocabularyUid),
    ...options,
  })
}

export const useAddTermMutation = (
  dto: AddTermDTO,
  options: MutationOptions<AddTermResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<AddTermResponse>({
    ...termOptions.addTerm(queryClient, dto),
    ...options,
  })
}
