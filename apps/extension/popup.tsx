import '@vook-client/design-system/style.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { PopupBox } from './components/PopupBox'

const queryClient = new QueryClient()

function IndexPopup() {
  return (
    <QueryClientProvider client={queryClient}>
      <PopupBox />
    </QueryClientProvider>
  )
}

export default IndexPopup
