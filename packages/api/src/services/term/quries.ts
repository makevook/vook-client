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
  DeleteAllDTO as DeleteBatchDTO,
  EditTermDTO,
  GetTermResponse,
  TermSort,
} from './model'

export const termOptions = {
  termInfo: (client: QueryClient, vocabularyUid: string, sort: TermSort[]) => ({
    queryKey: ['term'],
    queryFn: () => termService.getTerm(client, vocabularyUid, sort),
  }),
  addTerm: (client: QueryClient, dto: AddTermDTO) => ({
    mutationFn: () => termService.addTerm(client, dto),
  }),
  editTerm: (client: QueryClient, dto: EditTermDTO, termUid: string) => ({
    mutationFn: () => termService.editTerm(client, dto, termUid),
  }),
  deleteTerm: (client: QueryClient, termUid: string) => ({
    mutationFn: () => termService.deleteTerm(client, termUid),
  }),
  deleteBatchTerm: (client: QueryClient, dto: DeleteBatchDTO) => ({
    mutationFn: () => termService.deleteBatchTerm(client, dto),
  }),
}

export const useGetTermQuery = (
  vocabularyUid: string,
  sort: TermSort[],
  options: QueryOptions<GetTermResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useQuery<GetTermResponse>({
    ...termOptions.termInfo(queryClient, vocabularyUid, sort),
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

export const useDeleteTermMutation = (
  termUid: string,
  options: MutationOptions = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...termOptions.deleteTerm(queryClient, termUid),
    ...options,
  })
}

export const useDeleteBatchTermMutation = (
  dto: DeleteBatchDTO,
  options: MutationOptions = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...termOptions.deleteBatchTerm(queryClient, dto),
    ...options,
  })
}
