import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Vook Client Workshop',
    brandImage: '/logo.png',

    colorPrimary: '#3A10E5',
    colorSecondary: '#5D5CE5',

    barTextColor: '#FFFFFF',
  }),
})
