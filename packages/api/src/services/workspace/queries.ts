import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
  MutationOptions,
} from '@tanstack/react-query'

import { CustomQueryOptions } from '../../shared/type'

import { workspaceService } from './service'
import {
  WorkspaceCreateDTO,
  WorkspaceCreateResponse,
  WorkspaceInfoResponse,
} from './model'

export const workspaceOptions = {
  workspaceInfo: (client: QueryClient) => ({
    queryKey: ['workspace'],
    queryFn: () => workspaceService.getWorkspaceInfo(client),
  }),
  createWorkspace: (client: QueryClient, dto: WorkspaceCreateDTO) => ({
    mutationFn: () => workspaceService.createWorkspaceInfo(client, dto),
  }),
}

export const useWorkspaceInfoQuery = (
  options: CustomQueryOptions<WorkspaceInfoResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useQuery<WorkspaceInfoResponse>({
    ...workspaceOptions.workspaceInfo(queryClient),
    ...options,
  })
}

export const useCreateWorkspaceMutation = (
  dto: WorkspaceCreateDTO,
  options: MutationOptions<WorkspaceCreateResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<WorkspaceCreateResponse>({
    ...workspaceOptions.createWorkspace(queryClient, dto),
    ...options,
  })
}
