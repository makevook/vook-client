import { style } from '@vanilla-extract/css'

export const vocabularyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
})

export const vocabularyHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const vocabularyHeaderButton = style({
  display: 'flex',
  gap: 8,
})
