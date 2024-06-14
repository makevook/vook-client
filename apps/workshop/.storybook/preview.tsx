import '@vook-client/design-system/style.css'
import './storybook.css'

import { handlers } from '@vook-client/api'

import { initialize, mswLoader } from 'msw-storybook-addon'

import { Preview } from '@storybook/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  AppRouterContext,
  type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { ModalContextProvider } from '../../web/src/hooks/useModal/useModal'

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
  decorators: [
    (Story) => (
      <AppRouterContext.Provider value={{} as AppRouterInstance}>
        <QueryClientProvider client={new QueryClient()}>
          <ModalContextProvider>
            <Story />
            <div id="modal" />
          </ModalContextProvider>
        </QueryClientProvider>
      </AppRouterContext.Provider>
    ),
  ],
}

export default preview
