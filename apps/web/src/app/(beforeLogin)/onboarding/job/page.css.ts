import { style } from '@vanilla-extract/css'

import { appearBottom } from '@/styles/animations.css'

export const header = style({
  marginBottom: 40,
  opacity: 0,

  animation: `${appearBottom} 0.5s ease-out forwards`,
  animationDelay: '0.7s',
})

export const jobGroup = style({
  marginBottom: 80,
  opacity: 0,

  animation: `${appearBottom} 0.5s ease-out forwards`,
  animationDelay: '1.1s',
})

export const buttonGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 16,
})
