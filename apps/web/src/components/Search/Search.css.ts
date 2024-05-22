import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system/src/styles/global.css'

export const searchBoxContainer = style({
  top: 182,
  position: 'absolute',
  zIndex: 10,
  width: 580,
  backgroundColor: vars.colors['common-white'],
  border: `1px solid ${vars.colors['semantic-line-normal']}`,
  borderRadius: 6,
  boxSizing: 'border-box',
  ':hover': {
    backgroundColor: vars.colors['component-normal'],
  },
  ':focus-within': {
    backgroundColor: vars.colors['common-white'],
  },
})

export const searchBar = recipe({
  base: {
    display: 'flex',
    width: 580,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    history: {
      true: {
        height: 44,
        ':hover': {
          cursor: 'pointer',
          backgroundColor: vars.colors['component-alternative'],
        },
        '&:hover #close-button': {
          visibility: 'visible',
        },
      },
    },
  },
})

export type SearchBarVariants = RecipeVariants<typeof searchBar>

export const iconContainer = recipe({
  base: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  variants: {
    click: {
      true: {
        ':hover': { cursor: 'pointer' },
      },
    },
    visibile: {
      false: {
        visibility: 'hidden',
      },
    },
    absoulte: {
      true: {
        position: 'absolute',
        right: 59,
      },
    },
  },
})

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: 440,
  height: '100%',
})

export const inputBox = recipe({
  base: {
    width: '100%',
    outline: 'none',
    border: 'none',
    backgroundColor: 'inherit',

    fontSize: 18,
    fontWeight: 500,
    '::placeholder': {
      color: vars.colors['semantic-label-assistive'],
    },
    zIndex: 10,
  },
  variants: {
    text: {
      true: {
        margin: 0,
        fontSize: 16,
        fontWeight: 400,
      },
    },
  },
})

export const search = style({
  position: 'relative',
  height: 240,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  paddingTop: 100,
})
