import { style } from '@vanilla-extract/css'

import { HEADER_HEIGHT, SIDE_BAR_WIDTH } from '@/styles/layout'

export const mainArea = style({
  position: 'relative',

  minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,

  padding: 40,
  paddingBottom: 400,

  marginTop: HEADER_HEIGHT,
  marginLeft: SIDE_BAR_WIDTH,
})
