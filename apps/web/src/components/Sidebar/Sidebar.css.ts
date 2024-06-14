import { style } from '@vanilla-extract/css'

import { HEADER_HEIGHT, SIDE_BAR_WIDTH } from '../../styles/layout'

export const sideBar = style({
  position: 'fixed',
  top: HEADER_HEIGHT,
  left: 0,

  width: SIDE_BAR_WIDTH,
  height: '100dvh',

  padding: 30,

  borderRight: '1px solid black',
})
