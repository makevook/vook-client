import { style } from '@vanilla-extract/css'

import { HEADER_HEIGHT, SIDE_BAR_WIDTH } from '@/styles/layout'

export const mainArea = style({
  padding: 40,

  marginTop: HEADER_HEIGHT,
  marginLeft: SIDE_BAR_WIDTH,
})
