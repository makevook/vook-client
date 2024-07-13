/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, SymbolLogo, Text, TypoLogo } from '@vook-client/design-system'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useLayoutEffect, useState } from 'react'
import { userOptions, vocabularyOptions } from '@vook-client/api'

import { getStorage, removeStorage, setStorage } from '../../utils/storage'

import { PopupBoxContainer } from './PopupBox.styles'

import { SearchBox } from 'components/SearchBox'

export const PopupBox = () => {
  const [login, setLogin] = useState<boolean>(false)
  const [tokenDone, setTokenDone] = useState<boolean>(false)
  const [hasResult, setHasResult] = useState<boolean>(false)

  const client = useQueryClient()

  const userInfo = useQuery({
    ...userOptions.userInfo(client),
    enabled: tokenDone,
  })
  const vocabularyQuery = useQuery({
    ...vocabularyOptions.vocabularyInfo(client),
    enabled: tokenDone,
  })

  useLayoutEffect(() => {
    const setToken = async () => {
      const access = await getStorage<string>('vook-access')
      const refresh = await getStorage<string>('vook-refresh')
      const vookLogin = await getStorage<string>('vook-login')

      if (!access || !refresh) {
        return
      }

      if (!vookLogin) {
        setLogin(false)
        return
      }

      client.setQueryData(['access'], access)
      client.setQueryData(['refresh'], refresh)
      setTokenDone(true)
    }

    setToken()
  }, [client])

  useLayoutEffect(() => {
    if (userInfo.isSuccess && userInfo.data) {
      setStorage('vook-user', userInfo.data)
      setStorage('vook-vocabulary', vocabularyQuery.data)
      setLogin(true)
    }
  }, [userInfo.data, userInfo.isSuccess, vocabularyQuery.data])

  const onClickLogin = () => {
    window.open(
      `${process.env.PLASMO_PUBLIC_WEB_DOMAIN}/login`,
      'popup',
      'width=600,height=600',
    )
  }

  return (
    <PopupBoxContainer
      style={{
        width: hasResult ? '800px' : '450px',
      }}
    >
      <button
        onClick={() => {
          removeStorage('vook-access')
          removeStorage('vook-refresh')
          setLogin(false)
        }}
      >
        리셋
      </button>
      <div className="logo">
        <SymbolLogo size={24} />
        <TypoLogo size="small" />
      </div>
      {tokenDone && !login && (
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
      {login && <SearchBox hasResult={hasResult} setHasResult={setHasResult} />}
    </PopupBoxContainer>
  )
}
