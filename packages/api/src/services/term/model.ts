export const searchSort = {
  TermAsc: 'term:asc',
  TermDesc: 'term:desc',
  SynonymsAsc: 'synonyms:asc',
  SynonymsDesc: 'synonyms:desc',
  MeaningAsc: 'meaning:asc',
  MeaningDesc: 'meaning:desc',
  CreatedAtAsc: 'createdAt:asc',
  CreatedAtDesc: 'createdAt:desc',
} as const

export type SearchSort = (typeof searchSort)[keyof typeof searchSort]

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
  sort?: SearchSort[]
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
