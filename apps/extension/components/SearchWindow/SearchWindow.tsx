import { Text } from '@vook-client/design-system'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { searchQueryOptions, vocabularyOptions } from '@vook-client/api'

import { useSelectedText, useToggle } from '../../store/toggle'

import { SearchWindowHeader } from './SearchWindowHeader'
import * as S from './SearchWindow.styles'

import { TermList } from 'components/TermList'
import {
  BlankTermList,
  SearchWindowBlankButton,
} from 'components/TermList/TermList.styles'

const PlusIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 1L5 9M9 5L1 5"
      stroke="#161719"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const LinkExternalIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.375 1H2.875C1.83947 1 1 1.83946 1 2.87499V9.12501C1 10.1605 1.83947 11 2.875 11H9.125C10.1605 11 11 10.1605 11 9.12501V6.62497M7.87469 1.00015L11 1M11 1V3.81256M11 1L5.68704 6.31232"
      stroke="#006AFF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const SearchWindow = () => {
  const { selectedText } = useSelectedText()
  const { position } = useToggle()

  const client = useQueryClient()

  const vocabularyQuery = useQuery({
    ...vocabularyOptions.vocabularyInfo(client),
  })

  const searchQuery = useQuery({
    ...searchQueryOptions.search(
      {
        queries: selectedText.split(', '),
        highlightPostTag: '</strong>',
        highlightPreTag: '<strong>',
        withFormat: true,
        vocabularyUids:
          vocabularyQuery.data?.result.map((item) => item.uid) || [],
      },
      client,
    ),
    enabled: vocabularyQuery.isSuccess && selectedText.split(', ').length <= 10,
  })

  if (selectedText.split(', ').length > 10) {
    return (
      <S.SearchWindowBox className="vook-search-window" position={position}>
        <SearchWindowHeader />
        <S.SearchOverMaxLength>
          <Text color="label-alternative" type="body-2" fontWeight="medium">
            용어 검색은 10단어 이내로만 가능합니다.
          </Text>
        </S.SearchOverMaxLength>
        <S.SearchWindowLink>
          <a
            href={process.env.PLASMO_PUBLIC_WEB_DOMAIN}
            target="_blank"
            rel="noreferrer"
          >
            Vook 바로가기
            <LinkExternalIcon />
          </a>
        </S.SearchWindowLink>
      </S.SearchWindowBox>
    )
  }

  if (searchQuery.isLoading) {
    return (
      <S.SearchWindowBox className="vook-search-window" position={position}>
        <SearchWindowHeader tailText="검색 중..." />
        <S.SearchWindowLink>
          <a
            href={process.env.PLASMO_PUBLIC_WEB_DOMAIN}
            target="_blank"
            rel="noreferrer"
          >
            Vook 바로가기
            <LinkExternalIcon />
          </a>
        </S.SearchWindowLink>
      </S.SearchWindowBox>
    )
  }

  if (vocabularyQuery.isError || searchQuery.isError) {
    return (
      <S.SearchWindowBox className="vook-search-window" position={position}>
        <SearchWindowHeader />
        <BlankTermList>
          <Text type="body-2" color="label-alternative">
            검색 중 에러가 발생하였습니다!
          </Text>
          <S.SearchWindowLink>
            <a
              href={process.env.PLASMO_PUBLIC_WEB_DOMAIN}
              target="_blank"
              rel="noreferrer"
            >
              Vook 바로가기
              <LinkExternalIcon />
            </a>
          </S.SearchWindowLink>
        </BlankTermList>
      </S.SearchWindowBox>
    )
  }

  if (
    searchQuery.data?.result.records.reduce(
      (acc, record) => record.hits.length + acc,
      0,
    ) === 0
  ) {
    return (
      <S.SearchWindowBox className="vook-search-window" position={position}>
        <SearchWindowHeader />
        <BlankTermList>
          <Text type="body-2" color="label-alternative">
            등록된 용어가 없습니다.
          </Text>
          <SearchWindowBlankButton
            onClick={() => {
              window.open(process.env.PLASMO_PUBLIC_WEB_DOMAIN, '_blank')
            }}
          >
            <PlusIcon />
            용어 추가하기
          </SearchWindowBlankButton>
        </BlankTermList>
        <S.SearchWindowLink>
          <a
            href={process.env.PLASMO_PUBLIC_WEB_DOMAIN}
            target="_blank"
            rel="noreferrer"
          >
            Vook 바로가기
            <LinkExternalIcon />
          </a>
        </S.SearchWindowLink>
      </S.SearchWindowBox>
    )
  }

  return (
    <S.SearchWindowBox className="vook-search-window" position={position}>
      <SearchWindowHeader />
      <div
        style={{
          width: '800px',
        }}
      >
        <TermList records={searchQuery.data?.result.records || []} />
      </div>
      <S.SearchWindowLink>
        <a
          href={process.env.PLASMO_PUBLIC_WEB_DOMAIN}
          target="_blank"
          rel="noreferrer"
        >
          Vook 바로가기
          <LinkExternalIcon />
        </a>
      </S.SearchWindowLink>
    </S.SearchWindowBox>
  )
}
