import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/global.css'

export const stepContainer = style({
  display: 'flex',
  gap: 6,
})

export const step = style({
  width: 20,
  height: 4,

  backgroundColor: vars.colors['palette-primary-50'],
  borderRadius: 2,

  selectors: {
    '&.completed': {
      backgroundColor: vars.colors['semantic-primary-normal'],
    },
  },
})

export const completedStep = style({
  color: 'green',
})
