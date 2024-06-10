import { style } from '@vanilla-extract/css'

import { SIDE_BAR_WIDTH } from '@/styles/layout'

export const mainArea = style({
  marginLeft: SIDE_BAR_WIDTH,
})
