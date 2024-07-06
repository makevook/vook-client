import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const termContainer = style({
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
})

export const termListContainer = style({
  display: 'flex',
  width: '100%',
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

export const highlightHit = style({
  backgroundColor: vars.colors['component-alternative'],
})

export const highlight = style({
  backgroundColor: vars.colors.yellow,
})
