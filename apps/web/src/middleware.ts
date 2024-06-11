import { baseFetcher } from '@vook-client/api'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('access')
  const refreshToken = req.cookies.get('refresh')

  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-pathname', req.nextUrl.pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  baseFetcher.setUnAuthorizedHandler(() => {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
  })

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/login`)
  }

  if (!accessToken) {
    return
  }

  const userInfo = await baseFetcher.get('/user/info', {
    headers: {
      Authorization: accessToken.value,
    },
  })

  return userInfo
}
