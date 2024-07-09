/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, SymbolLogo, Text, TypoLogo } from '@vook-client/design-system'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useLayoutEffect, useState } from 'react'
import { userOptions, vocabularyOptions } from '@vook-client/api'

import { PopupBoxContainer } from './PopupBox.styles'

import { getStorage, setStorage } from 'utils/storage'

export const PopupBox = () => {
  const [login, setLogin] = useState<boolean>(false)
  const client = useQueryClient()

  const userInfo = useQuery({
    ...userOptions.userInfo(client),
    enabled: login,
  })
  const vocabularyQuery = useQuery({
    ...vocabularyOptions.vocabularyInfo(client),
    enabled: login,
  })

  useLayoutEffect(() => {
    const setToken = async () => {
      const access = await getStorage<string>('vook-access')
      const refresh = await getStorage<string>('vook-refresh')

      if (!access || !refresh) {
        return
      }

      client.setQueryData(['access'], access)
      client.setQueryData(['refresh'], refresh)
      setLogin(true)
    }

    setToken()
  }, [client])

  useLayoutEffect(() => {
    if (userInfo.isSuccess && userInfo.data) {
      setStorage('vook-user', userInfo.data)
      setStorage('vook-vocabulary', vocabularyQuery.data)
    }
  }, [userInfo.data, userInfo.isSuccess])

  return (
    <PopupBoxContainer>
      {userInfo.isSuccess && !userInfo.data && (
        <>
          <div className="logo">
            <SymbolLogo size={24} />
            <TypoLogo size="small" />
          </div>
          <Text type="body-1" fontWeight="medium">
            주제별로 용어집을 관리하고, 간편하게 용어를 검색하세요
          </Text>
          <Button fit="fill">무료로 시작</Button>
          <Text as="span" type="body-2" fontWeight="medium">
            이미 계정이 있으신가요?{' '}
            <span
              onClick={() => {
                window.open(
                  `${process.env.PLASMO_PUBLIC_WEB_DOMAIN}/login`,
                  'login',
                  'width=600,height=600',
                )
              }}
            >
              로그인
            </span>
          </Text>
        </>
      )}
      {userInfo.data && <div>로그인 완료</div>}
    </PopupBoxContainer>
  )
}
