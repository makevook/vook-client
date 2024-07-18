'use client'

import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

const TokenSender = () => {
  const location = usePathname()

  useLayoutEffect(() => {
    const access = Cookies.get('access')
    const refresh = Cookies.get('refresh')

    if (!access || !refresh) {
      return
    }

    global.window.postMessage(
      {
        from: 'vook-web',
        access,
        refresh,
      },
      '*',
    )
  }, [location])

  return null
}

export default TokenSender
