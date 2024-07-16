import { style } from '@vanilla-extract/css'

export const iconSection = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 720,
})

export const iconContainer = style({
  position: 'relative',
  left: 0,

  width: 1700,
  height: '100%',
})
