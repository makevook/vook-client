import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

import { appearBottom } from '@/styles/animations.css'

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

const disappearBottom = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(20px)',
  },
})

export const modalBackdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100dvw',
  height: '100dvh',

  backgroundColor: 'rgba(0, 0, 0, 0.5)',

  zIndex: 9999,

  animationName: fadeIn,
  animationDuration: '0.5s',
  animationFillMode: 'forwards',

  selectors: {
    '&.closing': {
      animation: `${fadeOut} 0.5s forwards`,
    },
  },
})

export const modalContainer = style({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',

  width: 'fit-content',
  minWidth: 400,
  height: 'fit-content',

  padding: 32,

  backgroundColor: vars.colors['common-white'],
  borderRadius: 8,

  animation: `${appearBottom} 0.5s forwards`,

  selectors: {
    '&.closing': {
      animation: `${disappearBottom} 0.5s forwards`,
    },
  },
})

export const modalHeadline = style({
  marginBottom: 8,
})

export const modalContent = style({
  marginBottom: 24,
})

export const modalButtonGroup = style({
  display: 'flex',
  gap: 12,

  width: '100%',
  height: 'fit-content',
})
