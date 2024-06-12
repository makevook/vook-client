import '@vook-client/design-system/style.css'
import './storybook.css'

import { handlers } from '@vook-client/api'

import { initialize, mswLoader } from 'msw-storybook-addon'

import { Preview } from '@storybook/react'

initialize()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: {
        ...handlers,
      },
    },
  },
  loaders: [mswLoader],
}

export default preview
