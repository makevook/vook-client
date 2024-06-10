import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const icon = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    size: {
      big: {
        width: 24,
        height: 24,
      },
      medium: {
        width: 24,
        height: 24,
      },
      small: {
        width: 16,
        height: 16,
      },
      footer: {
        width: 32,
        height: 32,
      },
    },
  },
})

export type IconVariants = RecipeVariants<typeof icon>
