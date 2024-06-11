import Cookies from 'js-cookie'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.PLASMO_PUBLIC_API_URL ||
  'https://dev.vook-api.seungyeop-lee.com'

export class Fetcher {
  private baseUrl: string

  private unAuthorizedHandler: VoidFunction | null = null

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public setUnAuthorizedHandler(handler: VoidFunction) {
    this.unAuthorizedHandler = handler
  }

  private async request<ResponseType>(
    url: string,
    options?: RequestInit,
  ): Promise<ResponseType> {
    let data = null

    try {
      const fetchOptions: RequestInit = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        ...options,
      }

      const response = await fetch(`${this.baseUrl}${url}`, fetchOptions)

      if (response.status === 401) {
        const result = await this.generateNewAccessToken<ResponseType>(
          url,
          options,
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
    try {
      const refreshToken = Cookies.get('refresh')

      if (!refreshToken) {
        return this.unAuthorizedHandler?.()
      }

      const response = await fetch(`${API_URL}/auth/refresh`, {
        headers: {
          'X-Refresh-Authorization': refreshToken + 'das',
        },
      })

      const newAccessToken = response.headers.get('Authorization')
      const newRefreshToken = response.headers.get('Authorization')

      if (!newAccessToken || !newRefreshToken) {
        if (this.unAuthorizedHandler) {
          return this.unAuthorizedHandler?.()
        }

        throw new Error('토큰 갱신에 실패하였습니다.')
      }

      Cookies.set('access', newAccessToken)
      Cookies.set('refresh', newRefreshToken)

      return this.request<ResponseType>(url, options)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      if (this.unAuthorizedHandler) {
        return this.unAuthorizedHandler?.()
      }
      if (location) {
        location.href = '/login'
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
