// eslint-disable-next-line import/no-unresolved
import styleText from 'data-text:@vook-client/design-system/style.css'
import createCache from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'

import { getStorage, setStorage } from './utils/storage'
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

  useEffect(() => {
    const setToken = async () => {
      const access = await getStorage<string>('vook-access')
      const refresh = await getStorage<string>('vook-refresh')

      queryClient.setQueryData(['access'], access)
      queryClient.setQueryData(['refresh'], refresh)
    }

    setToken()
  }, [])

  useEffect(() => {
    window.addEventListener(
      'message',
      async (event: {
        data: {
          from: string
          access: string
          refresh: string
        }
      }) => {
        if (event.data.from === 'vook-web') {
          await setStorage('vook-access', event.data.access)
          await setStorage('vook-refresh', event.data.refresh)
          queryClient.setQueryData(['access'], event.data.access)
          queryClient.setQueryData(['refresh'], event.data.refresh)
        }
      },
    )
  }, [])

  useEffect(() => {}, [])

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
