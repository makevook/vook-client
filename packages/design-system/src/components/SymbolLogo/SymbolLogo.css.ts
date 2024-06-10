import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const symbolLogo = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    size: {
      16: {
        width: 16,
        height: 16,
      },
      24: {
        width: 24,
        height: 24,
      },
      32: {
        width: 32,
        height: 32,
      },
      40: {
        width: 40,
        height: 40,
      },
    },
  },
  defaultVariants: {
    size: 16,
  },
})

export type SymbolLogoVariants = RecipeVariants<typeof symbolLogo>
