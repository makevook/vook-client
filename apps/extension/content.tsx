// eslint-disable-next-line import/no-unresolved
import styleText from 'data-text:@vook-client/design-system/style.css'
import createCache from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { baseFetcher } from '@vook-client/api'

import { getStorage, removeStorage, setStorage } from './utils/storage'
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
      retry: 0,
    },
  },
})

function VookContentScript() {
  const [login, setLogin] = useState(false)
  useDomRect()
  const { isSelected, isOpenSearchWindow, position } = useToggle()

  useEffect(() => {
    baseFetcher.setUnAuthorizedHandler(async () => {
      queryClient.removeQueries({
        queryKey: ['access'],
      })
      queryClient.removeQueries({
        queryKey: ['refresh'],
      })
      await removeStorage('vook-access')
      await removeStorage('vook-refresh')
    })

    baseFetcher.setTokenRefreshHandler(async (access, refresh) => {
      queryClient.setQueryData(['access'], access)
      queryClient.setQueryData(['refresh'], refresh)
      await setStorage('vook-access', access)
      await setStorage('vook-refresh', refresh)
    })
  }, [])

  useEffect(() => {
    const setToken = async () => {
      const access = await getStorage<string>('vook-access')
      const refresh = await getStorage<string>('vook-refresh')

      if (!access || !refresh) {
        setLogin(false)
        return
      }

      setLogin(true)
      queryClient.setQueryData(['access'], access)
      queryClient.setQueryData(['refresh'], refresh)
    }

    setToken()
  }, [])

  useEffect(() => {
    const postSuccessMessage = () => {
      window.postMessage(
        {
          from: 'vook-extension',
          content: 'success',
        },
        '*',
      )
    }

    window.addEventListener(
      'message',
      async (event: {
        data: {
          from: string
          access: string
          refresh: string
        }
      }) => {
        if (
          event.data.from === 'vook-web' &&
          event.data.access &&
          event.data.refresh
        ) {
          await setStorage('vook-access', event.data.access)
          await setStorage('vook-refresh', event.data.refresh)

          queryClient.setQueryData(['access'], event.data.access)
          queryClient.setQueryData(['refresh'], event.data.refresh)

          postSuccessMessage()
        }
      },
    )
  }, [])

  return (
    <CacheProvider value={styleCache}>
      <Global styles={reset} />
      <QueryClientProvider client={queryClient}>
        {login && isSelected && <ToggleButton position={position} />}
        {isOpenSearchWindow && <SearchWindow />}
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default VookContentScript
