import { isEmpty } from '@fxts/core'

import { useSelectedText, useToggle } from '../../store/toggle'
import { TermList } from '../TermList'

import * as S from './SearchWindow.styles'
import { SearchWindowHeader } from './SearchWindowHeader'

import { useSearch } from 'hooks/useSearch'

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
  const { position } = useToggle()
  const { selectedText } = useSelectedText()

  const { query, hitsTerms, headerText, tailText } = useSearch({
    selectedText,
  })

  if (query.isLoading) {
    return (
      <S.SearchWindowBox className="vook-search-window" position={position}>
        <SearchWindowHeader tailText="검색 중..." />
      </S.SearchWindowBox>
    )
  }

  if (query.isError) {
    return (
      <S.SearchWindowBox className="vook-search-window" position={position}>
        <SearchWindowHeader tailText="검색 중 에러가 발생하였습니다!" />
      </S.SearchWindowBox>
    )
  }

  return (
    <S.SearchWindowBox className="vook-search-window" position={position}>
      <SearchWindowHeader headerText={headerText} tailText={tailText} />
      <TermList hits={isEmpty(hitsTerms) ? [] : query.data!} />
      <S.SearchWindowLink>
        <a href="naver.com" target="_blank">
          Vook 바로가기
          <LinkExternalIcon />
        </a>
      </S.SearchWindowLink>
    </S.SearchWindowBox>
  )
}
