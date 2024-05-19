import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const icon = recipe({
  base: {
    display: 'flex',
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    size: {
      footer: {
        width: 32,
        height: 32,
      },
      large: {},
      medium: {},
      small: {
        width: 16,
        height: 16,
      },
      typo: { width: 60, height: 20 },
    },
  },
})

export type IconVariants = RecipeVariants<typeof icon>
