import { NextRequest, NextResponse } from 'next/server'
import {
  UserInfoResponse,
  UserStatus,
} from 'node_modules/@vook-client/api/src/services/useUserInfoQuery/model'

const beforeLoginMatcher = (pathname: string) => {
  const beforeLoginPaths = ['/login', '/signup']
  return beforeLoginPaths.some((path) => pathname.includes(path))
}

const beforeLoginMiddleware = async (req: NextRequest) => {
  const accessToken = req.cookies.get('access')
  const refreshToken = req.cookies.get('refresh')

  // 토큰이 모두 없는 경우
  if (!accessToken && !refreshToken) {
    return
  }

  if (refreshToken) {
    // TODO: 리프레시 토큰을 이용해 엑세스 토큰 재발급
  }

  if ((accessToken && !refreshToken) || !accessToken || !refreshToken) {
    return
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/info`, {
      headers: {
        Authorization: accessToken.value,
      },
    })

    if (res.status === 401) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
    }

    if (res.ok && res.status === 200) {
      const userInfo = (await res.json()) as UserInfoResponse

      if (
        [UserStatus.SocialLoginCompleted, UserStatus.Registered].includes(
          userInfo.result.status,
        )
      ) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/`)
      }
    }
  } catch {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
  }
}

export async function middleware(req: NextRequest) {
  if (beforeLoginMatcher(req.nextUrl.pathname)) {
    return beforeLoginMiddleware(req)
  }
}
