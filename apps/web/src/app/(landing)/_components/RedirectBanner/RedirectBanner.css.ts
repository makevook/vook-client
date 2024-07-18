import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

import { FOOTER_HEIGHT } from '@/styles/layout'

export const redirectBanner = style({
  marginTop: 160,
  backgroundColor: vars.colors['palette-primary-50'],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 48,
  padding: 90,
  marginBottom: FOOTER_HEIGHT,
})
