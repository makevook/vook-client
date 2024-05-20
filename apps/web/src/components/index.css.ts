'use client'

import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system/src/styles/global.css'

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 58,
})

export const flexBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
})

export const flexEnd = style({
  display: 'flex',
  justifyContent: 'flex-end',
})

export const footer = style({
  display: 'flex',
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 257,
  backgroundColor: vars.colors['component-normal'],
  padding: '40px 0',
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
})

export const footerIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
})

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
})

export const footerLine = style({
  borderColor: vars.colors['semantic-line-normal'],
})

export const logoContianer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
})

export const inner = style({
  position: 'relative',
  width: 1180,
  height: '100%',
})

export const searchContainer = style({
  position: 'relative',
  height: 240,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  paddingTop: 100,
})

export const main = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const searchBarContainer = style({
  top: 182,
  position: 'absolute',
  zIndex: 10,
})

export const termContainer = style({
  padding: '32px 0',
  marginBottom: 100,
  display: 'flex',
  justifyContent: 'center',
})

export const termListContainer = style({
  display: 'flex',
  width: '100%',
  gap: 20,
  margin: '20px 20px 0 20px',
  flexDirection: 'column',
})

export const textContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
})

export const termTitleContainer = style({
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
})

export const linkStyle = style({
  color: 'inherit',
  textDecoration: 'none',
})
