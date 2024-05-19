import { QueryOptions } from '@tanstack/react-query'

export type CustomQueryOptions<T> = Omit<
  QueryOptions<T>,
  'queryFn' | 'queryKey'
>
