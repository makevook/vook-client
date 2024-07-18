import type { SearchResponse } from '@vook-client/api'
import { Text } from '@vook-client/design-system'

import * as S from './TermItem.styles'

interface TermItemProps {
  term: SearchResponse['result']['records'][0]['hits'][0]
}

export const TermItem = ({ term }: TermItemProps) => {
  return (
    <S.TermBox>
      <Text type="body-2" color="semantic-primary-normal">
        <S.TermSqaure
          className="term"
          dangerouslySetInnerHTML={{
            __html: term.term,
          }}
        />
      </Text>
      <Text type="body-2" color="semantic-label-alternative">
        <S.TermSqaure
          className="synonyms"
          dangerouslySetInnerHTML={{
            __html: term.synonyms,
          }}
        />
      </Text>
      <Text type="body-2" color="semantic-label-normal">
        <S.TermSqaure
          className="meaning"
          dangerouslySetInnerHTML={{
            __html: term.meaning,
          }}
        />
      </Text>
    </S.TermBox>
  )
}
