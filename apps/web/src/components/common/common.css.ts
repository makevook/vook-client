import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const warningContainer = style({
  display: 'flex',
  backgroundColor: vars.colors['component-normal'],
  borderRadius: 10,
  padding: '12px 16px',
  gap: 8,
})

export const noTermContainer = style({
  margin: 'auto',
})

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const loadingWrapper = style({
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
})

export const spinner = style({
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '50%',
  borderTop: '4px solid #3498db',
  width: '40px',
  height: '40px',
  animation: `${spin} 2s linear infinite`,
})

export const workspaceInnerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
})

export const workspaceInnerAlignCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
})
