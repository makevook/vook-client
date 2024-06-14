import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const searchHistory = style({
  display: 'flex',
  alignItems: 'center',

  position: 'relative',

  width: '100%',
  height: 44,

  paddingInline: 70,

  ':hover': {
    backgroundColor: vars.colors['component-alternative'],
    cursor: 'pointer',
  },
})

export const historyIcon = style({
  position: 'absolute',
  left: 0,
  top: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 70,
  height: '100%',
})

export const deleteButton = style({
  position: 'absolute',
  right: 0,
  top: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 70,
  height: '100%',
})
