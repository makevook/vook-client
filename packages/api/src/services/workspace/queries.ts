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
  WorkspaceEditDTO,
  WorkspaceEditResponse,
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
  deleteWorkspace: (client: QueryClient, uid: string) => ({
    mutationFn: () => workspaceService.deletetWorkspaceInfo(client, uid),
  }),
  editWorkspace: (client: QueryClient, uid: string, dto: WorkspaceEditDTO) => ({
    mutationFn: () => workspaceService.editWorkspaceInfo(client, uid, dto),
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

export const useDeleteWorkspaceMutation = (
  uid: string,
  options: MutationOptions<WorkspaceCreateResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<WorkspaceCreateResponse>({
    ...workspaceOptions.deleteWorkspace(queryClient, uid),
    ...options,
  })
}

export const useEditWorkspaceMutation = (
  uid: string,
  dto: WorkspaceEditDTO,
  options: MutationOptions<WorkspaceEditResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation<WorkspaceCreateResponse>({
    ...workspaceOptions.editWorkspace(queryClient, uid, dto),
    ...options,
  })
}
