import { NextRequest, NextResponse } from 'next/server'
import { UserInfoResponse, UserStatus } from 'node_modules/@vook-client/api/'

/**
 * NOTE
 * 1. 액세스 토큰과 리프레시 토큰이 모두 없는 경우 => 로그인 페이지로 리다이렉트
 * 2. 액세스 토큰만 있는 경우 => 로그인 페이지로 리다이렉트
 * 3. 리프레시 토큰만 있는 경우 => 리프레시 토큰으로 액세스 토큰을 갱신
 * 4. 액세스 토큰과 리프레시 토큰이 모두 있는 경우 => 액세스 토큰이 유효한지 확인
 */

const onlyRegisteredMatch = ['/']

const isOnlyRegistered = async (
  req: NextRequest,
  finalResponse: NextResponse,
) => {
  const accessToken = req.cookies.get('access')?.value
  const refreshToken = req.cookies.get('refresh')?.value

  // 1 & 2
  if ((!accessToken && !refreshToken) || (accessToken && !refreshToken)) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
  }

  // 3
  if (!accessToken && refreshToken) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Refresh-Authorization': refreshToken,
      },
    })
    if (
      res.ok &&
      res.headers.get('Authorization') &&
      res.headers.get('X-Refresh-Authorization')
    ) {
      finalResponse.cookies.set('access', res.headers.get('Authorization')!)
      finalResponse.cookies.set(
        'refresh',
        res.headers.get('X-Refresh-Authorization')!,
      )
    } else {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
    }
  }

  const userInfoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/info`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          finalResponse.cookies.get('access')?.value || accessToken || '',
      },
    },
  )

  if (userInfoRes.ok) {
    const userInfo = (await userInfoRes.json()) as UserInfoResponse

    // 회원가입이 완료되지 않은 경우
    if (userInfo.result.status === UserStatus.SocialLoginCompleted) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
    } else {
      return finalResponse
    }
  } else {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function middleware(req: NextRequest) {
  const response = NextResponse.next()

  if (onlyRegisteredMatch.includes(req.nextUrl.pathname)) {
    await isOnlyRegistered(req, response)
  }

  return response
}
