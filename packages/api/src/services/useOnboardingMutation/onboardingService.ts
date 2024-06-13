import Cookies from 'js-cookie'

import { baseFetcher } from '../..'

import { OnboardingDTO, OnboardingResponse } from './model'

export const onboardingService = {
  async postOnboarding(body: OnboardingDTO) {
    return baseFetcher.post<OnboardingResponse>('/user/onboarding', {
      headers: {
        Authorization: Cookies.get('access') || '',
      },
      body: JSON.stringify(body),
    })
  },
}
