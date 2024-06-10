import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const signUpForm = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  height: 'fit-content',

  padding: '20px 10px',
})

export const signUpFormHeader = style({
  marginBottom: 80,
})

export const signUpInputField = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  width: '100%',
  marginBottom: 40,
})

export const signUpCheckboxField = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  width: '100%',
  marginBottom: 40,
})

export const checkboxGroup = style({
  display: 'flex',
  gap: 10,
})

export const termsLink = style({
  textDecoration: 'none',
  borderBottom: `1px solid ${vars.colors['link-blue']}`,
  color: vars.colors['link-blue'],
})

export const divider = style({
  width: '100%',
  height: 1,
  backgroundColor: vars.colors['semantic-line-normal'],
})
