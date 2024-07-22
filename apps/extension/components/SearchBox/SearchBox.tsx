import { Icon, SymbolLogo, Text } from '@vook-client/design-system'
import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { searchQueryOptions, vocabularyOptions } from '@vook-client/api'

import * as S from './SearchBox.styles'

import { TermList } from 'components/TermList'

interface SearchBoxProps {
  hasResult: boolean
  setHasResult: (value: boolean) => void
}

export const SearchBox = ({ hasResult, setHasResult }: SearchBoxProps) => {
  const [text, setText] = useState<string>('')
  const client = useQueryClient()

  const vocabularyQuery = useQuery({
    ...vocabularyOptions.vocabularyInfo(client),
  })

  const query = useQuery({
    ...searchQueryOptions.search(
      {
        queries: text.split(' '),
        highlightPostTag: '</strong>',
        highlightPreTag: '<strong>',
        withFormat: true,
        vocabularyUids:
          vocabularyQuery.data?.result.map((item) => item.uid) || [],
      },
      client,
    ),
    enabled: false,
  })

  const onSubmit = () => {
    query.refetch()
  }

  useEffect(() => {
    if (query.isSuccess && query.data.result.records.length > 0) {
      setHasResult(true)
    } else {
      setHasResult(false)
    }
  }, [query?.data?.result.records, query.isSuccess, setHasResult])

  return (
    <S.SearchBoxContainer
      style={{
        width: hasResult ? 'fit-content' : 'auto',
      }}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <S.SearchBoxIcon>
        <SymbolLogo size={24} />
      </S.SearchBoxIcon>
      <S.SearchButton>
        <Icon name="search-big" />
      </S.SearchButton>
      <S.SearchBoxInputBox>
        <S.SearchBoxInput
          placeholder="어떤 용어가 궁금하신가요?"
          onChange={(e) => setText(e.target.value)}
        />
        {query.isSuccess && (
          <TermList records={query.data.result.records || []} />
        )}
        {query.data?.result.records.reduce((acc, cur) => {
          return (acc += cur.hits.length)
        }, 0) === 0 && (
          <Text
            type="body-1"
            color="semantic-label-alternative"
            fontWeight="medium"
          >
            검색 결과가 없습니다.
          </Text>
        )}
        {query.isError && (
          <Text type="body-1" color="status-error" fontWeight="medium">
            검색 중 에러가 발생하였습니다.
          </Text>
        )}
      </S.SearchBoxInputBox>
    </S.SearchBoxContainer>
  )
}
