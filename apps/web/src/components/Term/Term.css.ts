import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const termContainer = style({
  marginBottom: 100,
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
})

export const termListContainer = style({
  display: 'flex',
  width: '100%',
  gap: 20,
  margin: '20px 20px 0 20px',
  flexDirection: 'column',
})

export const termListDataContainer = style({
  display: 'flex',
  padding: '8px 0',
  borderBottom: `1px solid ${vars.colors['semantic-line-alternative']}`,
})

export const textContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
})

export const termTitleContainer = style({
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
  ':hover': {
    cursor: 'pointer',
  },
})

export const noTermContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  width: 1140,
  height: 398,
  borderRadius: 6,
  border: `1px solid ${vars.colors['semantic-line-normal']}`,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
})

export const highlight = style({
  backgroundColor: vars.colors.yellow,
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
