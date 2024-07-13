import { style, createVar } from '@vanilla-extract/css'

export const accentVar = createVar()

export const IconBoxContainer = style({
  width: 120,
  height: 120,
  borderRadius: 10.55,
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'inherit',
})
