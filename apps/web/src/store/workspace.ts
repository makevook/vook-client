'use client'

import { WorkspaceInfoResponse } from '@vook-client/api'
import { PropsWithChildren } from 'react'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface WorkspaceState {
  workspace: WorkspaceInfoResponse['result']
}

export interface WorkspaceAction {
  setWorkspace: (newWorkspace: WorkspaceInfoResponse['result']) => void
}

export type WorkspaceStore = WorkspaceState & WorkspaceAction

export const workspaceStore = create(
  devtools<WorkspaceStore>((set) => ({
    workspace: [],
    setWorkspace: (newWorkspace) =>
      set((prev) => ({
        ...prev,
        workspace: newWorkspace,
      })),
  })),
)

export const WorkspaceProvider = ({
  workspace,
  children,
}: WorkspaceState & PropsWithChildren) => {
  workspaceStore.setState({ workspace })

  return children
}

export const useWorkspace = () => {
  const { workspace, setWorkspace } = workspaceStore()

  return { workspace, setWorkspace }
}
