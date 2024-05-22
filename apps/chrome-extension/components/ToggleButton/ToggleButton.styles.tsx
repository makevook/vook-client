import styled from '@emotion/styled'

import type { ToggleButtonProps } from './ToggleButton'

export const ToggleButtonBox = styled.button<ToggleButtonProps>`
  position: absolute;

  top: ${({ domRect }) => domRect.bottom + window.scrollY}px;
  left: ${({ domRect }) => domRect.right + window.scrollX}px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: none;

  background-color: #ffffff;
  box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.08),
    0px 0px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
  }

  img {
    width: 16px;
    height: 16px;
  }
`
