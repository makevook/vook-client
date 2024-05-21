import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { vars } from '../../styles/global.css'

export const button = recipe({
  base: {
    display: 'flex',
    border: 'none',
    borderRadius: 6,
    gap: 6,
  },
  variants: {
    size: {
      large: {
        height: 48,
        padding: '12px 26px',
      },
      middle: {
        height: 40,
        padding: '8px 16px',
      },
      small: {
        height: 34,
        padding: '8px 14px',
      },
      mini: {
        height: 30,
        padding: '6px 10px',
        borderRadius: 4,
      },
    },
    filled: {
      true: {
        backgroundColor: vars.colors['semantic-primary-normal'],
        color: vars.colors['common-white'],
      },
      false: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
      },
    },
    blueLine: {
      true: {
        borderColor: vars.colors['semantic-primary-normal'],
      },
      false: {
        borderColor: vars.colors['semantic-line-normal'],
      },
    },
    disabled: {
      true: {
        borderColor: vars.colors['palette-gray-100'],
        ':hover': {
          cursor: 'not-allowed',
        },
      },
      false: {
        ':hover': {
          cursor: 'pointer',
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        filled: true,
        disabled: true,
      },
      style: {
        backgroundColor: vars.colors['palette-gray-100'],
        color: vars.colors['semantic-label-disabled'],
      },
    },
    {
      variants: {
        filled: false,
        disabled: true,
      },
      style: {
        color: vars.colors['semantic-label-disabled'],
      },
    },
  ],
})

export type ButtonVariants = RecipeVariants<typeof button>
