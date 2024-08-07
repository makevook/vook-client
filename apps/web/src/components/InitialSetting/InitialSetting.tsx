'use client'

import { baseFetcher } from '@vook-client/api'
import { useLayoutEffect } from 'react'
import Cookies from 'js-cookie'
import { useQueryClient } from '@tanstack/react-query'

import { useToast } from '@/hooks/useToast'

export const InitialSetting = () => {
  const { addToast } = useToast()
  const client = useQueryClient()

  useLayoutEffect(() => {
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    client.setQueryData(['access'], Cookies.get('access'))
    client.setQueryData(['refresh'], Cookies.get('refresh'))

    baseFetcher.setUnAuthorizedHandler(() => {
      location.href = '/login'
    })
    baseFetcher.setErrorHandler(() => {
      addToast({
        message: '죄송합니다. 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.',
        type: 'error',
      })
    })
    baseFetcher.setTokenRefreshHandler((access, refresh) => {
      Cookies.set('access', access, {
        expires: new Date('2038-01-19T03:14:07.000Z'),
      })
      Cookies.set('refresh', refresh, {
        expires: new Date('2038-01-19T03:14:07.000Z'),
      })
    })
  }, [addToast])

  return null
}
