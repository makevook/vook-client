import React, { ReactNode } from 'react'
import * as RTL from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'

export const renderer = (component: ReactNode) => {
  const user = userEvent.setup()

  return {
    user,
    ...RTL.render(
      <QueryClientProvider client={new QueryClient()}>
        {component}
      </QueryClientProvider>,
    ),
  }
}
