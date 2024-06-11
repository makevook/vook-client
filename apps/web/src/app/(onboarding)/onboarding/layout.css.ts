import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

import { appearBottom } from '@/styles/animations.css'

const backgroundColorChange = keyframes({
  '0%': {
    backgroundColor: vars.colors['common-white'],
  },
  '100%': {
    backgroundColor: vars.colors['palette-primary-50'],
  },
})

export const onboardingLayout = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100dvw',
  height: '100dvh',

  animation: `${backgroundColorChange} 1s forwards`,
})

export const onboardingContainer = style({
  width: 'fit-content',
  height: 'fit-content',

  padding: 100,

  backgroundColor: vars.colors['common-white'],

  borderRadius: 16,

  opacity: 0,
  transform: 'translateY(30px)',

  animation: `${appearBottom} 0.3s ease-out forwards`,
  animationDelay: '0.2s',
})
