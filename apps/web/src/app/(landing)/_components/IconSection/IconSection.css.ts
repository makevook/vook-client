import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

import { appearBottom } from '@/styles/animations.css'

export const iconSection = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'center',

  position: 'relative',
  left: 0,

  width: 1700,
  height: '100%',
})

export const starIcon = style({
  opacity: 0,
  animation: `${appearBottom} 1s forwards`,
})

export const typoLogo = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',

  gap: '24px',

  transform: 'translateY(400px)',
})

export const typoHighlight = style({
  position: 'absolute',
  bottom: -12,

  width: '100%',
  height: 32,
  backgroundColor: vars.colors.yellow,
  zIndex: -1,
})
