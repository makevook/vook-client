import { style } from '@vanilla-extract/css'

export const toastContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  position: 'fixed',
  bottom: 30,
  right: 30,

  width: 'fit-content',
  height: 'fit-content',

  zIndex: 9999,
})
