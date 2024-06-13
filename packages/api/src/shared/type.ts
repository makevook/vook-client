import { DefaultedQueryObserverOptions } from '@tanstack/react-query'

export type CustomQueryOptions<T> = Omit<
  DefaultedQueryObserverOptions<T>,
  'queryFn' | 'queryKey' | 'throwOnError' | 'refetchOnReconnect' | 'queryHash'
>

export interface DefaultResponse<T extends object> {
  code: string
  result: T
}

export interface Tokens {
  access: string
  refresh: string
}
