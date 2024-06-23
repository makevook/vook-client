'use client'

import { baseFetcher } from '@vook-client/api'
import { useLayoutEffect } from 'react'

import { useToast } from '@/hooks/useToast'

export const InitialSetting = () => {
  const { addToast } = useToast()

  useLayoutEffect(() => {
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    baseFetcher.setErrorHandler((error) => {
      addToast({
        message: error.message,
        type: 'error',
      })
    })
  }, [addToast])

  return null
}
