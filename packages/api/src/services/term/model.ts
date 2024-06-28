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

export interface Terms {
  termUid: string
  term: string
  meaning: string
  synonyms: string[]
  createdAt: string
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
