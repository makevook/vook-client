import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/global.css'

export const checkboxContainer = style({
  position: 'relative',
  width: 22,
  height: 22,
})

export const checkboxOutline = style({
  width: '100%',
  height: '100%',
  borderColor: vars.colors['semantic-line-normal'],
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 3,
  overflow: 'hidden',
})

export const checkedBox = style({
  width: '100%',
  height: '100%',
  backgroundColor: vars.colors['semantic-primary-normal'],
})

export const checkIcon = style({
  position: 'absolute',
  width: 10,
  height: 10,
  top: '55%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
})

export const realCheckboxInput = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
})
