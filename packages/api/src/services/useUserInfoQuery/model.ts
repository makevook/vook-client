export enum UserStatus {
  SocialLoginCompleted = 'SOCIAL_LOGIN_COMPLETED',
  Registered = 'REGISTERED',
  Withdrawn = 'WITHDRAWN',
}

export interface UserInfoResponse {
  code: string
  result: {
    uid: string
    email: string
    status: UserStatus
    onboardingCompleted: boolean
    nickname: string
  }
}
