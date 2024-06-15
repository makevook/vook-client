import Cookies from 'js-cookie'
import { QueryClient } from '@tanstack/react-query'

import { Tokens } from '../shared/type'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.PLASMO_PUBLIC_API_URL ||
  'https://dev.vook-api.seungyeop-lee.com'

export class Fetcher {
  private baseUrl: string

  private changeTokenHandler = (tokens: Tokens) => {
    Cookies.set('accessToken', tokens.access)
    Cookies.set('refreshToken', tokens.refresh)
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

  private async authRequest<ResponseType>(
    url: string,
    client: QueryClient,
    options?: RequestInit,
    retry: boolean = false,
  ): Promise<ResponseType> {
    let data = null
    const access = client.getQueryData<string>(['access'])
    const refresh = client.getQueryData<string>(['refresh'])

    if (!access && !refresh && location) {
      location.href = '/login'
    }

    if (!access && refresh) {
      await this.generateNewAccessToken(refresh, client)
    }

    try {
      const fetchOptions: RequestInit = {
        ...options,
        headers: {
          Authorization: client.getQueryData<string>(['access'])!,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }

      const response = await fetch(`${this.baseUrl}${url}`, fetchOptions)

      if (response.status === 401) {
        if (retry) {
          throw new Error('토큰 갱신에 실패하였습니다.')
        }

        await this.generateNewAccessToken(refresh!, client)
        return this.authRequest<ResponseType>(url, client, options, true)
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

  private generateNewAccessToken = async (
    refresh: string,
    client: QueryClient,
  ) => {
    try {
      const res = await fetch(`${API_URL}/auth/refresh`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Refresh-Authorization': refresh,
        },
      })

      const newAccessToken = res.headers.get('Authorization')
      const newRefreshToken = res.headers.get('X-Refresh-Authorization')

      client.setQueryData(['access'], newAccessToken)
      client.setQueryData(['refresh'], newRefreshToken)
    } catch {
      if (global.location) {
        global.location.href = '/login'
      }
      throw new Error('토큰 갱신에 실패하였습니다.')
    }
  }

  public async get<ResponseType>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, options)
  }

  public async authGet<ResponseType>(
    url: string,
    client: QueryClient,
    options?: RequestInit,
  ) {
    return this.authRequest<ResponseType>(url, client, options)
  }

  public async post<ResponseType>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, {
      method: 'POST',
      ...options,
    })
  }

  public async authPost<ResponseType>(
    url: string,
    client: QueryClient,
    options?: RequestInit,
  ) {
    return this.authRequest<ResponseType>(url, client, {
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

  public async authPut<ResponseType = Error>(
    url: string,
    client: QueryClient,
    options?: RequestInit,
  ) {
    return this.authRequest<ResponseType>(url, client, {
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

  public async authPatch<ResponseType = Error>(
    url: string,
    client: QueryClient,
    options?: RequestInit,
  ) {
    return this.authRequest<ResponseType>(url, client, {
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

  public async authDelete<ResponseType = Error>(
    url: string,
    client: QueryClient,
    options?: RequestInit,
  ) {
    return this.authRequest<ResponseType>(url, client, {
      method: 'DELETE',
      ...options,
    })
  }
}

export const baseFetcher = new Fetcher(API_URL)

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export class API {
  private readonly method: Method

  private readonly url: string

  private queryClient?: QueryClient

  private isAuth = false

  public constructor(method: Method, url: string, isAuth = false) {
    this.method = method
    this.url = url
    this.isAuth = isAuth
  }

  public setQueryClient(client: QueryClient) {
    this.queryClient = client
    return this
  }

  public setAuth(isAuth: boolean) {
    this.isAuth = isAuth
    return this
  }

  private async authRequest<ResponseType>(options?: RequestInit) {
    if (!this.queryClient) {
      throw new Error('QueryClient is not set')
    }

    switch (this.method) {
      case 'GET':
        return baseFetcher.authGet<ResponseType>(
          this.url,
          this.queryClient,
          options,
        )
      case 'POST':
        return baseFetcher.authPost<ResponseType>(
          this.url,
          this.queryClient,
          options,
        )
      case 'PUT':
        return baseFetcher.authPut<ResponseType>(
          this.url,
          this.queryClient,
          options,
        )
      case 'PATCH':
        return baseFetcher.authPatch<ResponseType>(
          this.url,
          this.queryClient,
          options,
        )
      case 'DELETE':
        return baseFetcher.authDelete<ResponseType>(
          this.url,
          this.queryClient,
          options,
        )
      default:
        throw new Error('Method not allowed')
    }
  }

  public call<T>(options?: RequestInit): Promise<T> {
    if (this.isAuth) {
      return this.authRequest<T>(options)
    }

    switch (this.method) {
      case 'GET':
        return baseFetcher.get<T>(this.url, options)
      case 'POST':
        return baseFetcher.post<T>(this.url, options)
      case 'PUT':
        return baseFetcher.put<T>(this.url, options)
      case 'PATCH':
        return baseFetcher.patch<T>(this.url, options)
      case 'DELETE':
        return baseFetcher.delete<T>(this.url, options)
      default:
        throw new Error('Method not allowed')
    }
  }
}

export class APIBuilder {
  private api: API

  public static get(url: string) {
    return new APIBuilder('GET', url)
  }

  public static post(url: string) {
    return new APIBuilder('POST', url)
  }

  public static put(url: string) {
    return new APIBuilder('PUT', url)
  }

  public static patch(url: string) {
    return new APIBuilder('PATCH', url)
  }

  public static delete(url: string) {
    return new APIBuilder('DELETE', url)
  }

  private constructor(method: Method, url: string) {
    this.api = new API(method, url)
  }

  public withCredentials(queryClient: QueryClient) {
    this.api.setQueryClient(queryClient).setAuth(true)
    return this
  }

  public build() {
    return this.api
  }
}
