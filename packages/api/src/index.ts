export { baseFetcher, Fetcher } from './lib/fetcher'
export { handlers } from './mocks/handlers'

// auth
export type { SignUpDTO } from './services/auth/model'
export { useSignUpMutation, useWithdrawMutation } from './services/auth/queries'
export { authService } from './services/auth/service'

// user
export type { UserInfoResponse } from './services/user/model'
export { OnboardingFunnel, OnboardingJob } from './services/user/model'
export { UserStatus } from './services/user/model'
export { useOnboardingMutation } from './services/user/queries'
export {
  useEditUserMutation,
  userOptions,
  useUserInfoQuery,
} from './services/user/queries'
export { userService } from './services/user/service'

// search
export type {
  SearchDTO,
  SearchHit,
  SearchResponse,
  SearchSort,
} from './services/search/model'
export { searchSort } from './services/search/model'
export {
  searchQueryKeysGenerator,
  searchQueryOptions,
  useSearchQuery,
} from './services/search/queries'
export { searchService } from './services/search/searchService'
