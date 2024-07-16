import { style } from '@vanilla-extract/css'

import { HEADER_HEIGHT } from '@/styles/layout'

export const landingOverlay = style({
  position: 'relative',
  marginTop: HEADER_HEIGHT,
})

export const landingLayout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowX: 'hidden',
})

export const headerButtonContainer = style({
  display: 'flex',
  gap: 10,
})
