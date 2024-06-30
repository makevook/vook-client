import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
  MutationOptions,
} from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { vocabularyService } from './service'
import {
  VocabularyCreateDTO,
  VocabularyCreateResponse,
  VocabularyEditDTO,
  VocabularyEditResponse,
  VocabularyInfoResponse,
} from './model'

export const vocabularyOptions = {
  vocabularyInfo: (client: QueryClient) => ({
    queryKey: ['vocabulary'],
    queryFn: () => vocabularyService.getVocabularyInfo(client),
  }),
  createVocabulary: (client: QueryClient, dto: VocabularyCreateDTO) => ({
    mutationFn: () => vocabularyService.createVocabularyInfo(client, dto),
  }),
  deleteVocabulary: (client: QueryClient, uid: string) => ({
    mutationFn: () => vocabularyService.deletetVocabularyInfo(client, uid),
  }),
  editVocabulary: (
    client: QueryClient,
    uid: string,
    dto: VocabularyEditDTO,
  ) => ({
    mutationFn: () => vocabularyService.editVocabularyInfo(client, uid, dto),
  }),
}

export const useVacabularyInfoQuery = (
  options: CustomQueryOptions<VocabularyInfoResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useQuery<VocabularyInfoResponse>({
    ...vocabularyOptions.vocabularyInfo(queryClient),
    ...options,
  })
}

export const useCreateVocabularyMutation = (
  dto: VocabularyCreateDTO,
  options: MutationOptions<VocabularyCreateResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<VocabularyCreateResponse>({
    ...vocabularyOptions.createVocabulary(queryClient, dto),
    ...options,
  })
}

export const useDeleteVocabularyMutation = (
  uid: string,
  options: MutationOptions<VocabularyCreateResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<VocabularyCreateResponse>({
    ...vocabularyOptions.deleteVocabulary(queryClient, uid),
    ...options,
  })
}

export const useEditVocabularyMutation = (
  uid: string,
  dto: VocabularyEditDTO,
  options: MutationOptions<VocabularyEditResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<VocabularyCreateResponse>({
    ...vocabularyOptions.editVocabulary(queryClient, uid, dto),
    ...options,
  })
}
