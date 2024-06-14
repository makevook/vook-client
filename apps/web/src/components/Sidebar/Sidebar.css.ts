import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

import { HEADER_HEIGHT, SIDE_BAR_WIDTH } from '../../styles/layout'

export const sideBar = style({
  position: 'fixed',
  top: HEADER_HEIGHT,
  left: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: SIDE_BAR_WIDTH,
  height: `calc(100dvh - ${HEADER_HEIGHT}px)`,

  borderRight: `1px solid ${vars.colors['semantic-line-normal']}`,
})

export const sideBarWorkspace = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 6,

  height: '100%',
  width: '100%',

  padding: '22px 20px',
})
