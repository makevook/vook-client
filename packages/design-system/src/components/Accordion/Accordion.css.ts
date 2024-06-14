import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/global.css'

export const accordion = style({
  width: '100%',
  height: '50px',

  overflow: 'hidden',

  transition: 'height 0.3s',
})

export const accordionList = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 4,
})

export const accordionItem = style({
  display: 'flex',
  alignItems: 'center',
  height: 40,

  transition: 'background-color 0.3s',

  ':hover': {
    cursor: 'pointer',
    borderRadius: 6,
    backgroundColor: vars.colors['palette-gray-50'],
  },
})

export const accordionDepth = style({
  width: 24,
  height: 24,

  transition: 'transform 0.1s',

  selectors: {
    '&.open': {
      transform: 'rotate(90deg)',
    },
  },
})
