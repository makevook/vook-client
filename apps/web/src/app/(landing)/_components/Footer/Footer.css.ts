import { style } from '@vanilla-extract/css'

export const footerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 32,
  padding: 60,
})

export const flexBoxBetween = style({
  display: 'flex',
  width: 1180,
  justifyContent: 'space-between',
})

export const flexBox = style({
  display: 'flex',
  alignItems: 'center',
})
