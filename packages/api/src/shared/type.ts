import { QueryOptions } from '@tanstack/react-query'

export type CustomQueryOptions<T> = Omit<
  QueryOptions<T>,
  'queryFn' | 'queryKey'
>

export interface DefaultResponse<T extends object> {
  code: string
  result: T
}

export interface Tokens {
  access: string
  refresh: string
}
