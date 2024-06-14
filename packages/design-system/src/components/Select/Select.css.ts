import { keyframes, style } from '@vanilla-extract/css'

import { vars } from '../../styles/global.css'

export const selectContainer = style({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
})

const appearAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const selectGroup = style({
  position: 'absolute',
  top: 0,
  left: 0,

  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',

  padding: 0,
  margin: 0,

  listStyle: 'none',

  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)',
  borderRadius: 6,

  backgroundColor: vars.colors['common-white'],

  opacity: 0,
  animation: `${appearAnimation} 0.5s ease forwards`,
})

export const selectOption = style({
  width: '100%',
  padding: '8px 10px',

  whiteSpace: 'nowrap',

  ':hover': {
    backgroundColor: vars.colors['palette-gray-50'],
    cursor: 'pointer',
  },
})
