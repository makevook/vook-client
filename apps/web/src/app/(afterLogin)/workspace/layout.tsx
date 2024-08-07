import { PropsWithChildren } from 'react'
import { cookies } from 'next/headers'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { getQueryClient } from '@/utils/react-query'

const Layout = ({ children }: PropsWithChildren) => {
  const cookieStore = cookies()

  const access = cookieStore.get('access')?.value || ''
  const refresh = cookieStore.get('refresh')?.value || ''

  const queryClient = getQueryClient()

  queryClient.setQueryData(['access'], access)
  queryClient.setQueryData(['refresh'], refresh)

  const dehydrateState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydrateState}>{children}</HydrationBoundary>
  )
}

export default Layout
