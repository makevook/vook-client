import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

import { HEADER_HEIGHT } from '@/styles/layout'

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,

  width: '100dvw',
  height: HEADER_HEIGHT,

  paddingLeft: 20,
  paddingRight: 40,

  borderBottom: `1px solid ${vars.colors['semantic-line-normal']}`,

  backgroundColor: vars.colors['common-white'],
  zIndex: 100,
})

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginInline: 'auto',
  height: '100%',
  maxWidth: 1180,
  width: '100%',
  zIndex: 100,
})

export const headerInnerFull = style({
  maxWidth: '100%',
})
