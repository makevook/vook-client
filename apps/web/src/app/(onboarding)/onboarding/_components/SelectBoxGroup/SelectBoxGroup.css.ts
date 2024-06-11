import { style } from '@vanilla-extract/css'

export const selectBoxGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 20,
})
