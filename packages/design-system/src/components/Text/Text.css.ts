import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { fontWeights } from '../../tokens/typography'

export const text = recipe({
  base: {
    display: 'inline',
    margin: 0,
    letterSpacing: '0.01em',
    whiteSpace: 'pre-wrap',
  },
  variants: {
    type: {
      'display-1': {
        fontSize: 56,
        letterSpacing: '-0.03em',
        lineHeight: '130%',
      },
      'display-2': {
        fontSize: 40,
        letterSpacing: '-0.02em',
        lineHeight: '130%',
      },
      'title-1': {
        fontSize: 36,
        letterSpacing: '-0.02em',
        lineHeight: '130%',
      },
      'title-2': {
        fontSize: 28,
        letterSpacing: '-0.02em',
        lineHeight: '135%',
      },
      'title-3': {
        fontSize: 24,
        letterSpacing: '-0.02em',
        lineHeight: '135%',
      },
      'heading-1': {
        fontSize: 20,
        letterSpacing: '-0.15em',
        lineHeight: '140%',
      },
      'heading-2': {
        fontSize: 18,
        lineHeight: '145%',
      },
      'body-1': {
        fontSize: 16,
        lineHeight: '150%',
      },
      'body-1-reading': {
        fontSize: 16,
        lineHeight: '160%',
      },
      'body-2': {
        fontSize: 14,
        lineHeight: '140%',
      },
      'body-2-reading': {
        fontSize: 14,
        lineHeight: '160%',
      },
      label: {
        fontSize: 13,
        letterSpacing: '-0.02em',
        lineHeight: '140%',
      },
      'caption-1': {
        fontSize: 12,
        letterSpacing: '0.02em',
        lineHeight: '130%',
      },
      'caption-2': {
        fontSize: 11,
        letterSpacing: '0.02em',
        lineHeight: '130%',
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
        selectors: {
          '&[data-type="label"]': {
            letterSpacing: '-0.01em',
          },
        },
      },
    },
  },
  defaultVariants: {
    type: 'body-1',
    fontWeight: 'regular',
  },
})

export type TextVariants = RecipeVariants<typeof text>
