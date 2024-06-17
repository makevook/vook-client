import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const profileEditForm = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 40,
  width: '100%',
})

export const profileEditFormInputField = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 30,

  border: 'none',
})

export const profileEditFormButtonField = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  gap: 40,

  border: 'none',
})

export const profileEditFormWithdrawLink = style({
  lineHeight: '100%',
  borderBottom: `1px solid ${vars.colors['semantic-label-alternative']}`,
  cursor: 'pointer',
})
