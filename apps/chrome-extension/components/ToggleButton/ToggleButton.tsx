import { useToggle } from '../../store/toggle'
import ToggleIcon from '../../assets/toggle.svg'

import * as S from './ToggleButton.styles'

export interface ToggleButtonProps {
  position: { x: number; y: number }
}

export const ToggleButton = ({ position }: ToggleButtonProps) => {
  const { changeSearchWindow } = useToggle()

  if (!position) {
    return null
  }

  return (
    <S.ToggleButtonBox
      onClick={() => {
        changeSearchWindow(true)
      }}
      position={position}
    >
      <img src={ToggleIcon} alt="toggle-icon" />
    </S.ToggleButtonBox>
  )
}
