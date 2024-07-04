export interface VocabularyInfoResponse {
  code: string
  result: VocabularyInfo[]
}

export interface VocabularyInfo {
  uid: string
  name: string
  termCount: number
  createdAt: string
}

export interface VocabularyEditDTO {
  name: string
}

export interface VocabularyCreateDTO {
  name: string
}

export interface VocabularyCreateResponse {
  code: string
}

export interface VocabularyEditResponse {
  code: string
}
