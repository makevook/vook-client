export const termSort = {
  TermAsc: 'term%2Casc',
  TermDesc: 'term%2Cdesc',
  SynonymAsc: 'synonym%2Casc',
  SynonymDesc: 'synonym%2Cdesc',
  MeaningAsc: 'meaning%2Casc',
  MeaningDesc: 'meaning%2Cdesc',
  CreatedAtAsc: 'createdAt%2Casc',
  CreatedAtDesc: 'createdAt%2Cdesc',
} as const

export type TermSort = (typeof termSort)[keyof typeof termSort]

export interface Terms extends TermType {
  termUid: string
  createdAt: string
}

export interface TermType {
  term: string
  meaning: string
  synonyms: string[]
}

export interface GetTermResponse {
  code: number
  result: Array<Terms>
}

export interface GetTermDTO {
  page?: number
  size?: number
  sort?: TermSort[]
  vocabularyUid: string
}

export interface AddTermDTO extends TermType {
  vocabularyUid: string
}

export interface EditTermDTO extends TermType {}

export interface AddTermResponse {
  code: number
  result: { uid: string }
}

export interface DeleteAllDTO {
  termUids: string[]
}
