import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

const appearLeft = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(100px)',
  },
  '50%': {
    opacity: 1,
    transform: 'translateX(-10px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const disappearRight = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
  '50%': {
    opacity: 1,
    transform: 'translateX(-10px)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateX(100px)',
  },
})

export const toast = style({
  display: 'flex',
  gap: 6,

  width: 400,
  height: 'fit-content',
  padding: 16,

  backgroundColor: vars.colors['palette-gray-900'],

  borderRadius: 10,

  color: vars.colors['common-white'],
  opacity: 1,

  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)',
  transform: 'translateX(100px)',

  animation: `${appearLeft} 0.6s ease-out forwards`,

  selectors: {
    '&.disappear': {
      animation: `${disappearRight} 0.6s ease-out forwards`,
    },
  },
})

export const toastContent = style({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  gap: 8,
})
