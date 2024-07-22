/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, SymbolLogo, Text, TypoLogo } from '@vook-client/design-system'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useLayoutEffect, useState } from 'react'
import { baseFetcher, userOptions, vocabularyOptions } from '@vook-client/api'

import { getStorage, removeStorage } from '../../utils/storage'

import { PopupBoxContainer } from './PopupBox.styles'

import { SearchBox } from 'components/SearchBox'

export const PopupBox = () => {
  const [hasToken, setHasToken] = useState<boolean>(false)
  const [initializing, setInitializing] = useState<boolean>(false)
  const [hasResult, setHasResult] = useState<boolean>(false)

  const client = useQueryClient()

  const userInfoQuery = useQuery({
    ...userOptions.userInfo(client),
    enabled: hasToken,
  })

  useQuery({
    ...vocabularyOptions.vocabularyInfo(client),
    enabled: hasToken,
  })

  useLayoutEffect(() => {
    baseFetcher.setUnAuthorizedHandler(() => {
      removeStorage('vook-access')
      removeStorage('vook-refresh')
    })
  }, [])

  useLayoutEffect(() => {
    const setToken = async () => {
      const access = await getStorage<string>('vook-access')
      const refresh = await getStorage<string>('vook-refresh')

      if (!access || !refresh) {
        setHasToken(false)
        setInitializing(true)
        return
      }

      client.setQueryData(['access'], access)
      client.setQueryData(['refresh'], refresh)

      setInitializing(true)
      setHasToken(true)
    }

    setToken()
  }, [client])

  useEffect(() => {
    window.addEventListener(
      'message',
      (event: {
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
          setHasToken(true)
        }
      },
    )
  }, [])

  const onClickLogin = () => {
    window.open(
      `${process.env.PLASMO_PUBLIC_WEB_DOMAIN}/login`,
      'popup',
      'width=600,height=600',
    )
  }

  if (!initializing) {
    return null
  }

  const userInfo = userInfoQuery.data?.result || null

  return (
    <PopupBoxContainer
      style={{
        width: hasResult ? '800px' : '450px',
      }}
    >
      <div className="logo">
        <SymbolLogo size={24} />
        <TypoLogo size="small" />
      </div>
      {!hasToken && (
        <>
          <Text type="body-1" fontWeight="medium">
            주제별로 용어집을 관리하고, 간편하게 용어를 검색하세요
          </Text>
          <Button fit="fill">무료로 시작</Button>
          <Text
            as="span"
            type="body-2"
            fontWeight="medium"
            color="palette-gray-700"
          >
            이미 계정이 있으신가요?{' '}
            <Text
              type="body-2"
              color="status-info"
              fontWeight="bold"
              onClick={onClickLogin}
            >
              로그인
            </Text>
          </Text>
        </>
      )}
      {userInfo && hasToken && (
        <>
          <Button
            size="small"
            filled={false}
            onClick={() => {
              removeStorage('vook-access')
              removeStorage('vook-refresh')
              setHasToken(false)
            }}
          >
            로그아웃
          </Button>
          <SearchBox hasResult={hasResult} setHasResult={setHasResult} />
        </>
      )}
    </PopupBoxContainer>
  )
}
