// SynonymsAsc => SynonymAsc으로 s가 빠져야 함 !!
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

export interface SearchDTO {
  vocabularyUids: string[]
  queries: string[]
  withFormat?: boolean
  highlightPreTag?: string
  highlightPostTag?: string
}

export interface SearchHit {
  uid: string
  term: string
  synonyms: string
  meaning: string
}

export interface Record {
  vocabularyUid: string
  hits: SearchHit[]
}

export interface SearchResponse {
  code: string
  result: {
    query: string
    records: Record[]
  }
}
