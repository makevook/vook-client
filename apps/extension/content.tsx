// eslint-disable-next-line import/no-unresolved
import styleText from 'data-text:@vook-client/design-system/style.css'
import createCache from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ToggleButton } from './components/ToggleButton'
import { SearchWindow } from './components/SearchWindow'
import { useDomRect } from './hooks/useDomRect'
import { useToggle } from './store/toggle'
import { reset } from './styles/reset'

const styleElement = document.createElement('style')

const styleCache = createCache({
  key: 'plasmo-emotion-cache',
  prepend: true,
  container: styleElement,
})

export const getStyle = () => {
  styleElement.textContent = styleText.replaceAll(':root', ':host')
  return styleElement
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
})

function VookContentScript() {
  useDomRect()
  const { isSelected, isOpenSearchWindow, position } = useToggle()

  return (
    <CacheProvider value={styleCache}>
      <Global styles={reset} />
      <QueryClientProvider client={queryClient}>
        {isSelected && <ToggleButton position={position} />}
        {isOpenSearchWindow && <SearchWindow />}
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default VookContentScript
