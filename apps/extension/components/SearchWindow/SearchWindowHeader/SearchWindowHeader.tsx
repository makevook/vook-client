import { useCallback } from 'react'

import { useToggle } from '../../../store/toggle'
import ToggleIcon from '../../../assets/toggle.svg'

import * as S from './SearchWindowHeader.styles'

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

interface SearchWindowHeaderProps {
  headerText?: string
  tailText?: string
}

export const SearchWindowHeader = ({
  headerText = '',
  tailText = '',
}: SearchWindowHeaderProps) => {
  const { changeSearchWindow, changeIsSelected } = useToggle()

  const onClickClose = useCallback(() => {
    changeSearchWindow(false)
    changeIsSelected(false)
  }, [changeIsSelected, changeSearchWindow])

  return (
    <S.SearchWindowHeader>
      <div className="term-header">
        <img src={ToggleIcon} alt="toggle-icon" />
        <p
          className="query"
          dangerouslySetInnerHTML={{
            __html: headerText,
          }}
        />
        <p className="tail">{tailText}</p>
      </div>
      <button onClick={onClickClose}>
        <CloseIcon />
      </button>
    </S.SearchWindowHeader>
  )
}
