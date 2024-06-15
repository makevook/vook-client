import React, { ReactNode } from 'react'
import * as RTL from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'

export const renderer = (component: ReactNode) => {
  const user = userEvent.setup()
  const queryClient = new QueryClient()
  queryClient.setQueryData(['access'], 'access')
  queryClient.setQueryData(['refresh'], 'refresh')

  return {
    user,
    ...RTL.render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>,
    ),
  }
}
