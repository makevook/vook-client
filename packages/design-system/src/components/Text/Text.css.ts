import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { fontWeights } from '../../tokens/typography'

export const text = recipe({
  base: {
    display: 'inline',
    letterSpacing: '0.01em',
    whiteSpace: 'pre-wrap',
    margin: 0,
  },
  variants: {
    type: {
      'display-1': {
        fontSize: 56,
      },
      'display-2': {
        fontSize: 40,
      },
      'title-1': {
        fontSize: 36,
      },
      'title-2': {
        fontSize: 28,
      },
      'title-3': {
        fontSize: 24,
      },
      'heading-1': {
        fontSize: 20,
      },
      'heading-2': {
        fontSize: 18,
      },
      'body-1': {
        fontSize: 16,
      },
      'body-2': {
        fontSize: 14,
      },
      label: {
        fontSize: 13,
      },
      'caption-1': {
        fontSize: 12,
      },
      'caption-2': {
        fontSize: 11,
      },
    },
    fontWeight: {
      regular: {
        fontWeight: fontWeights.regular,
      },
      medium: {
        fontWeight: fontWeights.medium,
      },
      bold: {
        fontWeight: fontWeights.bold,
      },
    },
  },
  defaultVariants: {
    type: 'body-1',
    fontWeight: 'regular',
  },
})

export type TextVariants = RecipeVariants<typeof text>
