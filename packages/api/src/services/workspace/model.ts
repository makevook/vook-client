export interface WorkspaceInfoResponse {
  code: string
  result: WorkspaceInfo[]
}

export interface WorkspaceInfo {
  uid: string
  name: string
  termCount: number
  createdAt: string
}

export interface WorkspaceEditDTO {
  name: string
}

export interface WorkspaceCreateDTO {
  name: string
}

export interface WorkspaceCreateResponse {
  code: string
}

export interface WorkspaceEditResponse {
  code: string
}
