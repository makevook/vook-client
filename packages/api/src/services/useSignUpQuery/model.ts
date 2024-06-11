export interface SignUpDTO {
  nickname: string
  requiredTermsAgree: boolean
  policyAgree: boolean
  marketingEmailOptIn: boolean
}

export interface SignUpResponse {
  code: string
}
