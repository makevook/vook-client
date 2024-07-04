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
        width: 200,
        color: vars.colors['semantic-primary-normal'],
      },
      synonym: {
        width: 200,
        color: vars.colors['semantic-label-alternative'],
      },
      icon: {
        width: 50,
      },
    },
    reading: {
      title: {
        width: 200,
        backgroundColor: vars.colors['component-alternative'],
        color: vars.colors['semantic-label-alternative'],
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      },
      description: {
        width: 600,
        paddingRight: 100,
      },
      icon: {
        width: 50,
        backgroundColor: vars.colors['component-alternative'],
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
