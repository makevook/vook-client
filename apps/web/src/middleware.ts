import { NextRequest, NextResponse } from 'next/server'
import { UserInfoResponse, UserStatus } from 'node_modules/@vook-client/api'

/**
 * 권한 검사를 위한 미들웨어 생성 함수
 *
 * - 토큰이 모두 없는 경우: destination으로 리다이렉트
 * - access 토큰이 없는 경우: refresh 토큰을 이용해 새로운 access 토큰을 발급 후 권한 확인 및 토큰 갱신
 * - access 토큰이 있지만 유효하지 않은 경우: refresh 토큰을 이용해 새로운 access 토큰을 발급 후 권한 확인 및 토큰 갱신
 * - refresh 토큰이 만료된 경우: destination으로 리다이렉트
 * - 유저 상태가 허용되지 않는 경우: destination으로 리다이렉트
 *
 * @param roles 접근 권한이 허용된 유저 상태
 */
const checkUserStatusMiddleware =
  (roles: Array<UserStatus>) =>
  async (
    req: NextRequest,
    finalResponse: NextResponse,
    destination: string,
  ) => {
    const accessToken = req.cookies.get('access')?.value
    const refreshToken = req.cookies.get('refresh')?.value
    const loginRedirectResponse = NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_DOMAIN}${destination}`,
    )

    let newAccessToken: string | null = null
    let newRefreshToken: string | null = null

    const tokenGenerate = async (refresh: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Refresh-Authorization': refresh,
          },
        },
      )
      if (res.ok) {
        newAccessToken = res.headers.get('Authorization')
        newRefreshToken = res.headers.get('X-Refresh-Authorization')
        finalResponse.cookies.set('access', newAccessToken!)
        finalResponse.cookies.set('refresh', newRefreshToken!)
      } else {
        return false
      }

      return true
    }

    const fetchUserInfo = async (token: string) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/info`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token,
        },
      })
      if (res.ok) {
        return res.json() as Promise<UserInfoResponse>
      }
      return null
    }

    const isBothTokenMissing = !accessToken && !refreshToken

    if (isBothTokenMissing) {
      return loginRedirectResponse
    }

    const isAccessTokenMissing = !accessToken && refreshToken

    if (isAccessTokenMissing) {
      const success = await tokenGenerate(refreshToken)

      if (!success) {
        return loginRedirectResponse
      }
    }

    let userInfo = await fetchUserInfo(newAccessToken || accessToken || '')

    if (!userInfo) {
      const success = await tokenGenerate(refreshToken!)

      if (!success) {
        return loginRedirectResponse
      }

      userInfo = await fetchUserInfo(newAccessToken || accessToken || '')

      if (!userInfo) {
        return loginRedirectResponse
      }
    }

    if (!roles.includes(userInfo.result.status)) {
      return loginRedirectResponse
    }

    return finalResponse
  }

const onlyRegisteredMatch = ['/onboarding']

const onlyRegisteredMiddleware = checkUserStatusMiddleware([
  UserStatus.Registered,
  UserStatus.Withdrawn,
])

const onlyUnregisteredSocialUser = checkUserStatusMiddleware([
  UserStatus.SocialLoginCompleted,
])

export async function middleware(req: NextRequest) {
  const response = NextResponse.next()

  if (
    onlyRegisteredMatch.some((url) => req.nextUrl.pathname.includes(url)) ||
    req.nextUrl.pathname === '/'
  ) {
    return onlyRegisteredMiddleware(req, response, '/login')
  }

  if (req.nextUrl.pathname === '/signup') {
    return onlyUnregisteredSocialUser(req, response, '/login')
  }
}
