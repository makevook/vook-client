'use client'

import { baseFetcher } from '@vook-client/api'
import { useLayoutEffect } from 'react'

import { useToast } from '@/hooks/useToast'

export const InitialSetting = () => {
  const { addToast } = useToast()

  useLayoutEffect(() => {
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    baseFetcher.setErrorHandler(() => {
      // addToast({
      //   message: error.message,
      //   type: 'error',
      // })
      addToast({
        message: '죄송합니다. 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.',
        type: 'error',
      })
    })
  }, [addToast])

  return null
}
