// TextField.css.ts
import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/global.css'

export const inputBase = style({
  display: 'block',
  width: '100%',
  minHeight: '172px',
  padding: '16px 14px',
  color: vars.colors['common-black'],
  border: `1px solid ${vars.colors['semantic-line-normal']}`,
  borderRadius: '6px',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  ':focus': {
    borderColor: vars.colors['semantic-primary-normal'],
    outline: 'none',
  },
  selectors: {
    '&::placeholder': {
      color: vars.colors['semantic-label-assistive'], // placeholder 스타일 지정
    },
  },
})

export const inputLabel = style({
  display: 'block',
  marginBottom: '8px',
})
