import {
  MutationOptions,
  QueryClient,
  QueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { termService } from './service'
import {
  AddTermDTO,
  AddTermResponse,
  EditTermDTO,
  GetTermResponse,
} from './model'

export const termOptions = {
  termInfo: (client: QueryClient, vocabularyUid: string) => ({
    queryKey: ['term'],
    queryFn: () => termService.getTerm(client, vocabularyUid),
  }),
  addTerm: (client: QueryClient, dto: AddTermDTO) => ({
    mutationFn: () => termService.addTerm(client, dto),
  }),
  editTerm: (client: QueryClient, dto: EditTermDTO, termUid: string) => ({
    mutationFn: () => termService.editTerm(client, dto, termUid),
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

export const useEditTermMutation = (
  dto: EditTermDTO,
  termUid: string,
  options: MutationOptions = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...termOptions.editTerm(queryClient, dto, termUid),
    ...options,
  })
}
