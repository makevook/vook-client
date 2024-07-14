import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const redirectBanner = style({
  marginTop: 160,
  backgroundColor: vars.colors['palette-primary-50'],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  gap: 48,
  padding: 90,
})
