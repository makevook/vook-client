import Cookies from 'js-cookie'

import { Tokens } from '../shared/type'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.PLASMO_PUBLIC_API_URL ||
  'https://dev.vook-api.seungyeop-lee.com'

export class Fetcher {
  private baseUrl: string

  private unAuthorizationHandler = () => {}

  private changeTokenHandler = (tokens: Tokens) => {
    Cookies.set('accessToken', tokens.access)
    Cookies.set('refreshToken', tokens.refresh)
  }

  public setUnAuthorizationHandler = (handler: VoidFunction) => {
    this.unAuthorizationHandler = handler
  }

  public setChangeTokenHandler = (handler: (tokens: Tokens) => void) => {
    this.changeTokenHandler = handler
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async request<ResponseType>(
    url: string,
    options?: RequestInit,
  ): Promise<ResponseType> {
    let data = null

    try {
      const fetchOptions: RequestInit = {
        ...options,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      }

      const response = await fetch(`${this.baseUrl}${url}`, fetchOptions)

      if (response.status === 401) {
        const result = await this.generateNewAccessToken<ResponseType>(
          url,
          fetchOptions,
        )

        if (result) {
          return result
        }
      }

      if (response.ok) {
        data = (await response.json()) as Promise<ResponseType>
      } else {
        throw new Error('네트워크 통신 과정에서 에러가 발생하였습니다!')
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw error
    }

    return data
  }

  private generateNewAccessToken = async <ResponseType>(
    url: string,
    options?: RequestInit,
  ) => {
    const headers = {
      ...options?.headers,
    } as {
      'X-Refresh-Authorization': string
    }

    try {
      const response = await fetch(`${API_URL}/auth/refresh`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Refresh-Authorization': headers['X-Refresh-Authorization'],
        },
      })

      const newAccessToken = response.headers.get('Authorization')
      const newRefreshToken = response.headers.get('X-Refresh-Authorization')

      if (!newAccessToken || !newRefreshToken) {
        throw new Error('토큰 갱신에 실패하였습니다.')
      }

      this.changeTokenHandler({
        access: newAccessToken,
        refresh: newRefreshToken,
      })

      return this.request<ResponseType>(url, {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: newAccessToken,
          'X-Refresh-Authorization': newRefreshToken,
        },
      })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)

      if (global.location) {
        global.location.href = '/login'
        return
      }

      if (this.unAuthorizationHandler) {
        this.unAuthorizationHandler()
      }
    }
  }

  public async get<ResponseType>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, options)
  }

  public async post<ResponseType>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, {
      method: 'POST',
      ...options,
    })
  }

  public async put<ResponseType = Error>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, {
      method: 'PUT',
      ...options,
    })
  }

  public async patch<ResponseType = Error>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, {
      method: 'PATCH',
      ...options,
    })
  }

  public async delete<ResponseType = Error>(
    url: string,
    options?: RequestInit,
  ) {
    return this.request<ResponseType>(url, {
      method: 'DELETE',
      ...options,
    })
  }
}

export const baseFetcher = new Fetcher(API_URL)
