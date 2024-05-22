import ToggleIcon from '../../assets/toggle.svg'

import * as S from './ToggleButton.styles'

export interface ToggleButtonProps {
  domRect: DOMRect
}

export const ToggleButton = ({ domRect }: ToggleButtonProps) => {
  if (!domRect) {
    return null
  }

  return (
    <S.ToggleButtonBox domRect={domRect}>
      <img src={ToggleIcon} alt="toggle-icon" />
    </S.ToggleButtonBox>
  )
}
