import { createVar, style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const searchBoxContainer = style({
  display: 'flex',
  flexDirection: 'column',

  width: 580,
  height: 'fit-content',

  backgroundColor: vars.colors['common-white'],
  boxSizing: 'border-box',

  border: `1px solid ${vars.colors['semantic-line-normal']}`,
  borderRadius: 6,
  overflow: 'hidden',

  listStyle: 'none',
})

export const searchInputArea = style({
  position: 'relative',
  width: '100%',
  height: 58,
})

export const searchBox = style({
  display: 'flex',

  width: '100%',
  height: '100%',

  padding: '0 90px 0 70px',

  border: 'none',
  boxSizing: 'border-box',

  fontSize: 18,
  fontWeight: 500,

  '::placeholder': {
    color: vars.colors['semantic-label-assistive'],
    paddingLeft: 6,
  },

  ':hover': {
    backgroundColor: vars.colors['component-normal'],
  },

  ':focus': {
    backgroundColor: vars.colors['common-white'],
    outline: 'none',
  },
})

export const resetButton = style({
  position: 'absolute',
  top: 0,
  right: 35,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 70,
  height: '100%',

  backgroundColor: 'transparent',
  border: 'none',

  ':hover': {
    cursor: 'pointer',
  },
})

export const searchLogo = style({
  position: 'absolute',
  top: 0,
  left: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 70,
  height: '100%',

  pointerEvents: 'none',
})

export const searchIcon = style({
  position: 'absolute',
  top: 0,
  right: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 70,
  height: '100%',

  backgroundColor: 'transparent',
  border: 'none',

  ':hover': {
    cursor: 'pointer',
  },
})

export const historyListHeight = createVar()

export const historyList = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: historyListHeight,

  padding: 0,
  margin: 0,

  listStyle: 'none',
  transition: 'height 0.3s',
})
