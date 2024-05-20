import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { vars } from '../../styles/global.css'

export const list = recipe({
  base: {
    padding: '16px 12px',
    boxSizing: 'border-box',
  },
  variants: {
    page: {
      table: {
        width: 220,
        color: vars.colors['semantic-primary-normal'],
      },
      synonym: {
        width: 220,
        color: vars.colors['semantic-label-alternative'],
      },
      description: {
        width: 480,
        paddingRight: 100,
      },
      title: {
        width: 220,
        backgroundColor: vars.colors['component-alternative'],
        color: vars.colors['semantic-label-alternative'],
      },
    },
    search: {
      table: {
        width: 120,
        padding: '8px 12px',
        color: vars.colors['semantic-primary-normal'],
      },
      synonym: {
        width: 120,
        padding: '8px 12px',
      },
      description: {
        width: 340,
        padding: '8px, 40px, 8px, 12px',
      },
      title: {
        width: 120,
        padding: '4px 12px',
        backgroundColor: vars.colors['palette-primary-50'],
        color: vars.colors['semantic-label-normal'],
      },
    },
  },
})

export type ListVariants = RecipeVariants<typeof list>
