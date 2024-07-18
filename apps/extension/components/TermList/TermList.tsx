/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { vocabularyOptions, type SearchResponse } from '@vook-client/api'
import { useQueryClient } from '@tanstack/react-query'
import { Text } from '@vook-client/design-system'
import { Fragment } from 'react/jsx-runtime'

import * as S from './TermList.styles'

import { TermItem } from 'components/TermItem'

interface TermListProps {
  records: SearchResponse['result']['records']
}

export const TermList = ({ records }: TermListProps) => {
  const client = useQueryClient()
  const vocabularyUids = client.getQueryData<{
    result: {
      name: string
      uid: string
    }[]
  }>(vocabularyOptions.vocabularyInfo(client).queryKey)!

  return (
    <S.TermListBox>
      {records.map((record) => {
        if (record.hits.length === 0) {
          return null
        }
        return (
          <Fragment key={record.vocabularyUid}>
            <S.TermListVocabularyTitle>
              <Text type="label" color="semantic-label-alternative">
                {
                  vocabularyUids.result.find(
                    (vocabulary) => vocabulary.uid === record.vocabularyUid,
                  )!.name
                }
              </Text>
            </S.TermListVocabularyTitle>
            {record.hits.map((term) => (
              <div key={term.uid}>
                <TermItem term={term} />
              </div>
            ))}
          </Fragment>
        )
      })}
    </S.TermListBox>
  )
}
