import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import { ToggleButton } from './components/ToggleButton'
import { useDomRect } from './hooks/useDomRect'

const styleElement = document.createElement('style')

const styleCache = createCache({
  key: 'plasmo-emotion-cache',
  prepend: true,
  container: styleElement,
})

export const getStyle = () => styleElement

function VookContentScript() {
  const { domRect, toggle } = useDomRect()

  return (
    <CacheProvider value={styleCache}>
      {toggle && <ToggleButton domRect={domRect} />}
    </CacheProvider>
  )
}

export default VookContentScript
