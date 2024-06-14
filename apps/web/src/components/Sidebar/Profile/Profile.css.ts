import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const profile = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  height: 'fit-content',

  padding: '20px 12px',

  borderTop: `1px solid ${vars.colors['semantic-line-normal']}`,
})

export const profileNickname = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
})

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
