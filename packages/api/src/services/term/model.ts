export const termSort = {
  Term: {
    Asc: 'term%2Casc',
    Desc: 'term%2Cdesc',
  },
  Synonym: {
    Asc: 'synonym%2Casc',
    Desc: 'synonym%2Cdesc',
  },
  Meaning: {
    Asc: 'meaning%2Casc',
    Desc: 'meaning%2Cdesc',
  },
  CreatedAt: {
    Asc: 'createdAt%2Casc',
    Desc: 'createdAt%2Cdesc',
  },
} as const

export type TermSort = (typeof termSort)[keyof typeof termSort]

export type TermSortValues =
  (typeof termSort)[keyof typeof termSort][keyof typeof termSort.Term]

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
