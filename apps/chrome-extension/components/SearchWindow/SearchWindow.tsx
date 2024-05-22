import { useCallback, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { serchQueryOptions } from '@vook-client/api/src'

import ToggleIcon from '../../assets/toggle.svg'
import { useSelectedText, useToggle } from '../../store/toggle'
import { TermList } from '../TermList'

import * as S from './SearchWindow.styles'

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

const CloseIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 1L1 13M13 13L1 1"
      stroke="#161719"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

export const SearchWindow = () => {
  const { position, changeSearchWindow, changeIsSelected } = useToggle()
  const { selectedText } = useSelectedText()

  const onClickClose = useCallback(() => {
    changeSearchWindow(false)
    changeIsSelected(false)
  }, [changeIsSelected, changeSearchWindow])

  const query = useQuery({
    ...serchQueryOptions.get({
      query: selectedText,
      withFormat: true,
      highlightPreTag: '<strong>',
      highlightPostTag: '</strong>',
    }),
    select: (data) => data.result.hits,
  })

  const searchedTerms = useMemo(
    () => query.data?.map((hit) => hit.term).splice(0, 3),
    [query.data],
  )

  const headerText = useMemo(
    () =>
      searchedTerms?.length > 0
        ? `${searchedTerms.join(', ')} 등의 용어를 찾았습니다.`
        : `${selectedText}에 대한 검색 결과가 없습니다.`,
    [searchedTerms, selectedText],
  )

  return (
    <S.SearchWindowBox className="vook-search-window" position={position}>
      <S.SearchWindowHeader>
        <div className="term-header">
          <img src={ToggleIcon} alt="toggle-icon" />
          <p
            dangerouslySetInnerHTML={{
              __html: searchedTerms ? headerText : '검색 중...',
            }}
          />
        </div>
        <button onClick={onClickClose}>
          <CloseIcon />
        </button>
      </S.SearchWindowHeader>
      {!query.isLoading && query.data !== undefined && (
        <TermList hits={query.data} />
      )}
      <S.SearchWindowLink>
        <a href="naver.com" target="_blank">
          Vook 바로가기
          <LinkExternalIcon />
        </a>
      </S.SearchWindowLink>
    </S.SearchWindowBox>
  )
}
