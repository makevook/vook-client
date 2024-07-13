import { style } from '@vanilla-extract/css'

import { HEADER_HEIGHT } from '@/styles/layout'

export const landingLayout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: HEADER_HEIGHT,
  overflowX: 'hidden',
})
