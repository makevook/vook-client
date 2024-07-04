import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../styles/global.css'

export const accordion = style({
  width: '100%',
  height: '50px',

  overflow: 'hidden',

  transition: 'height 0.3s',
})

export const accordionTitle = style({
  width: '100%',
})

export const accordionList = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 4,
})

export const accordionItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    height: 40,

    transition: 'background-color 0.3s',

    ':hover': {
      backgroundColor: vars.colors['palette-primary-50'],

      // backgroundColor: vars.colors['palette-gray-50'],
      cursor: 'pointer',
      borderRadius: 6,
    },
  },
  variants: {
    isFilled: {
      true: {
        backgroundColor: vars.colors['palette-primary-50'],

        // ':hover': {
        //   backgroundColor: vars.colors['palette-primary-50'],
        // },
      },
    },
  },
})

export const accordionDepth = style({
  width: 24,
  height: 24,

  transition: 'transform 0.1s',

  selectors: {
    '&.open': {
      transform: 'rotate(90deg)',
    },
  },
})
