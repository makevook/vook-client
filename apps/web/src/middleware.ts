import { NextRequest, NextResponse } from 'next/server'
import { UserInfoResponse, UserStatus } from 'node_modules/@vook-client/api'

const checkUserStatusMiddleware =
  (roles: Array<UserStatus>) =>
  async (
    req: NextRequest,
    finalResponse: NextResponse,
    destination: string,
  ) => {
    const accessToken = req.cookies.get('access')?.value
    const refreshToken = req.cookies.get('refresh')?.value

    if ((!accessToken && !refreshToken) || (accessToken && !refreshToken)) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_DOMAIN}${destination}`,
      )
    }

    if (!accessToken && refreshToken) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Refresh-Authorization': refreshToken,
          },
        },
      )
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
        return NextResponse.redirect(
          `${process.env.NEXT_PUBLIC_DOMAIN}${destination}`,
        )
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

      if (!roles.includes(userInfo.result.status)) {
        return NextResponse.redirect(
          `${process.env.NEXT_PUBLIC_DOMAIN}${destination}`,
        )
      } else {
        return finalResponse
      }
    } else {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_DOMAIN}${destination}`,
      )
    }
  }

const onlyRegisteredMatch = ['/']

export async function middleware(req: NextRequest) {
  const response = NextResponse.next()

  if (onlyRegisteredMatch.includes(req.nextUrl.pathname)) {
    return checkUserStatusMiddleware([
      UserStatus.Registered,
      UserStatus.Withdrawn,
    ])(req, response, '/login')
  }

  if (req.nextUrl.pathname === '/signup') {
    return checkUserStatusMiddleware([UserStatus.SocialLoginCompleted])(
      req,
      response,
      '/login',
    )
  }
}
