export class Fetcher {
  private baseUrl: string

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
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        ...options,
      }

      const response = await fetch(`${this.baseUrl}${url}`, fetchOptions)

      if (response.ok) {
        data = (await response.json()) as Promise<ResponseType>
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw error
    }

    return data
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

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://dev.vook-api.seungyeop-lee.com'

export const baseFetcher = new Fetcher(API_URL)
