import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const profileDropboxTrigger = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 32,
  height: 32,
  padding: 4,
  borderRadius: 6,

  ':hover': {
    backgroundColor: vars.colors['palette-gray-50'],
    cursor: 'pointer',
  },
})

export const profileSettingItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  width: 174,

  gap: 10,
})
