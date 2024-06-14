import { style } from '@vanilla-extract/css'

import { HEADER_HEIGHT, SIDE_BAR_WIDTH } from '@/styles/layout'

export const mainArea = style({
  position: 'relative',

  padding: 40,
  paddingBottom: 400,

  marginTop: HEADER_HEIGHT,
  marginLeft: SIDE_BAR_WIDTH,
})
