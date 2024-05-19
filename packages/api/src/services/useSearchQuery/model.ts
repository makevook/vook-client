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

export type SearchSort = (typeof searchSort)[keyof typeof searchSort][]

export interface SearchDTO {
  query: string
  withFormat?: boolean
  highlightPreTag?: string
  highlightPostTag?: string
  sort?: SearchSort
}

export interface SearchHit {
  term: string
  synonyms: string
  meaning: string
}

export interface SearchResponse {
  code: number
  message: string
  result: {
    query: string
    hits: Array<SearchHit>
  }
}
