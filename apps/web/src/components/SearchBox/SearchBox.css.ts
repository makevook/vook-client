import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const searchBoxPositioner = style({
  position: 'relative',
  width: 580,
  height: 60,
})

export const searchBoxContainer = style({
  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  top: 0,
  right: 0,

  width: 800,
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

export const searchResultItem = style({
  height: 44,
  width: '100%',
  padding: '12px 24px',
})

export const searchResultHit = style({
  display: 'flex',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: vars.colors['component-alternative'],
  },
})

export const searchResultTerm = style({
  width: 160,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
})

globalStyle(`${searchResultHit} .highlight`, {
  backgroundColor: vars.colors.yellow,
})

export const searchResultSynonyms = style({
  width: 160,
})

export const searchResultMeaning = style({
  display: 'block',
  width: 430,
})

export const searchResultMeaningText = style({
  width: 430,

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  wordBreak: 'break-all',
})
