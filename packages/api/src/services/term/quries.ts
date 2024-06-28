import {
  QueryClient,
  QueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { termService } from './service'
import { GetTermResponse } from './model'

export const termOptions = {
  termInfo: (client: QueryClient, vocabularyUid: string) => ({
    queryKey: ['term'],
    queryFn: () => termService.getTerm(client, vocabularyUid),
  }),
}

export const useGetTermQuery = (
  vocabularyUid: string,
  options: QueryOptions<GetTermResponse> = {},
) => {
  const queryClient = useQueryClient()

  return useQuery<GetTermResponse>({
    ...termOptions.termInfo(queryClient, vocabularyUid),
    ...options,
  })
}
