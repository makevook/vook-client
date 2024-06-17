export interface SignUpDTO {
  nickname: string
  requiredTermsAgree: boolean
  marketingEmailOptIn: boolean
}

export interface SignUpResponse {
  code: string
}

export interface UserWithdrawResponse {
  code: string
}
