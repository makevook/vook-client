import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const flexCenter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const flexAlignCenter = style({
  display: 'flex',
  alignItems: 'center',
  vars: {
    gap: '3',
  },
})

export const flexEnd = style({
  display: 'flex',
  justifyContent: 'flex-end',
})

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
})

export const header = style([
  flexCenter,
  {
    height: 58,
  },
])

export const footer = style([
  flexCenter,
  {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 257,
    width: '100%',
    backgroundColor: vars.colors['component-normal'],
    padding: '40px 0',
    zIndex: -10,
  },
])

export const footerIconContainer = style({
  position: 'absolute',
  top: 40,
  left: 0,
})

export const footerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  zIndex: -10,
})

export const footerLine = style({
  borderColor: vars.colors['semantic-line-normal'],
})

export const inner = style({
  position: 'relative',
  width: 1180,
  height: '100%',
})

export const main = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})
