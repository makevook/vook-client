'use client'

import { useEffect, useState } from 'react'

const initMsw = async () => {
  if (
    process.env.NEXT_RUNTIME !== 'nodejs' &&
    process.env.NEXT_PUBLIC_MSW === 'enable'
  ) {
    const { worker } = await import('./browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [isInit, setIsInit] = useState(false)

  useEffect(() => {
    const init = async () => {
      if (!isInit) {
        await initMsw().then(() => setIsInit(true))
      }
    }
    init()
  }, [isInit])

  if (!isInit) {
    return null
  }

  return <>{children}</>
}
