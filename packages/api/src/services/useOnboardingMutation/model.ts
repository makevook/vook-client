export enum OnboardingFunnel {
  X = 'X',
  FACEBOOK = 'FACEBOOK',
  LINKEDIN = 'LINKEDIN',
  INSTAGRAM = 'INSTAGRAM',
  BLOG = 'NAVER_BLOG',
  RECOMMENDATION = 'RECOMMENDATION',
  OTHER = 'OTHER',
}

export enum OnboardingJob {
  PLANNER = 'PLANNER',
  DESIGNER = 'DESIGNER',
  DEVELOPER = 'DEVELOPER',
  MARKETER = 'MARKETER',
  CEO = 'CEO',
  HR = 'HR',
  OTHER = 'OTHER',
}

export interface OnboardingDTO {
  funnel: OnboardingFunnel | null
  job: OnboardingJob | null
}

export interface OnboardingResponse {
  code: string
}
