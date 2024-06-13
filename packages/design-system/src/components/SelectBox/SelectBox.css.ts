import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/global.css'

export const selectBox = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '12px 16px',

    border: `1px solid ${vars.colors['semantic-line-normal']}`,
    borderRadius: 8,
    gap: 6,
  },
  variants: {
    fit: {
      default: {
        width: 180,
      },
      fill: {
        width: '100%',
      },
      hug: {
        width: 'fit-content',
      },
    },
    selected: {
      true: {
        border: `1px solid ${vars.colors['semantic-primary-normal']}`,
        backgroundColor: vars.colors['palette-primary-50'],
      },
      false: {
        ':hover': {
          cursor: 'pointer',
          backgroundColor: vars.colors['component-normal'],
        },
      },
    },
  },
  defaultVariants: {
    fit: 'default',
    selected: false,
  },
})

export const fakeSelectBox = style({
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '100%',
  opacity: 0,
  margin: 0,

  ':hover': {
    cursor: 'pointer',
  },

  transform: 'translate(-54px, -38px)',
})

export type SelectBoxVariants = RecipeVariants<typeof selectBox>
