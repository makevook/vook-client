import type { SearchResponse } from '@vook-client/api'

import * as S from './TermItem.styles'

interface TermHeaderItemProps {
  term?: never
}

interface TermItemProps {
  term: SearchResponse['result']['hits'][0]
}

export const TermItem = ({ term }: TermItemProps | TermHeaderItemProps) => {
  if (!term) {
    return (
      <S.TermBox className="header">
        <S.TermSqaure className="term">용어</S.TermSqaure>
        <S.TermSqaure className="synonyms">동의어</S.TermSqaure>
        <S.TermSqaure className="meaning">의미</S.TermSqaure>
      </S.TermBox>
    )
  }

  return (
    <S.TermBox>
      <S.TermSqaure
        className="term"
        dangerouslySetInnerHTML={{
          __html: term.term,
        }}
      />
      <S.TermSqaure
        className="synonyms"
        dangerouslySetInnerHTML={{
          __html: term.synonyms,
        }}
      />
      <S.TermSqaure
        className="meaning"
        dangerouslySetInnerHTML={{
          __html: term.meaning,
        }}
      />
    </S.TermBox>
  )
}
