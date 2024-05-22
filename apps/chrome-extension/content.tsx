import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import { ToggleButton } from './components/ToggleButton'
import { SearchWindow } from './components/SearchWindow'
import { useDomRect } from './hooks/useDomRect'
import { useToggle } from './store/toggle'

const styleElement = document.createElement('style')

const styleCache = createCache({
  key: 'plasmo-emotion-cache',
  prepend: true,
  container: styleElement,
})

export const getStyle = () => styleElement

function VookContentScript() {
  useDomRect()
  const { isSelected, isOpenSearchWindow, position } = useToggle()

  return (
    <CacheProvider value={styleCache}>
      {isSelected && <ToggleButton position={position} />}
      {isOpenSearchWindow && <SearchWindow />}
    </CacheProvider>
  )
}

export default VookContentScript
