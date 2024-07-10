import { type SearchResponse } from '@vook-client/api'
import { isEmpty } from '@fxts/core'

import { TermItem } from '../TermItem'

import * as S from './TermList.styles'

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

interface TermListProps {
  records: SearchResponse['result']['records']
}

export const TermList = ({ records }: TermListProps) => {
  if (isEmpty(records)) {
    return (
      <S.BlankTermList>
        <p>등록된 용어가 없습니다.</p>
        <S.SearchWindowBlankButton
          href="https://forms.gle/eqTF8wG1WzcY6wKF6"
          target="_blank"
        >
          <PlusIcon />
          용어 추가하기
        </S.SearchWindowBlankButton>
      </S.BlankTermList>
    )
  }

  return (
    <S.TermListBox>
      <TermItem />
      {records[0].hits.map((hit) => {
        return <TermItem key={hit.term} term={hit} />
      })}
    </S.TermListBox>
  )
}
