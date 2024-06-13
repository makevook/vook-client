import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { vars } from '../../styles/global.css'

export const inputLabel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const invalidInputLabel = style({
  position: 'absolute',
})

export const requirementText = style({
  position: 'absolute',
  left: 0,
  bottom: -24,
  color: vars.colors['status-error'],
})

export const input = recipe({
  base: {
    boxSizing: 'border-box',
    width: '100%',
    height: 48,
    padding: '14px 16px',

    borderRadius: '5px',

    fontSize: 14,

    ':disabled': {
      backgroundColor: vars.colors['component-alternative'],
    },

    ':focus': {
      color: vars.colors['semantic-label-normal'],
      outline: 'none',
    },

    '::placeholder': {
      color: vars.colors['semantic-label-assistive'],
    },
  },

  variants: {
    invalid: {
      false: {
        border: `1px solid ${vars.colors['semantic-line-normal']}`,
      },
      true: {
        border: `1px solid ${vars.colors['status-error']}`,
      },
    },
  },

  defaultVariants: {
    invalid: false,
  },
})

export const inputIcon = style({
  position: 'absolute',
  top: '50%',
  left: 16,
  transform: 'translateY(-50%)',
})

export const withIcon = style({
  paddingLeft: 44,
})

export type InputVariants = RecipeVariants<typeof input>
