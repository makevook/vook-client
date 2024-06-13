import { MutationOptions, useMutation } from '@tanstack/react-query'

import { OnboardingDTO, OnboardingResponse } from './model'
import { onboardingService } from './onboardingService'

export const onboardingOptions = {
  postOnboarding: (dto: OnboardingDTO) => ({
    mutationFn: () => onboardingService.postOnboarding(dto),
  }),
}

export const useOnboardingMutation = (
  dto: OnboardingDTO,
  queryOptions: MutationOptions<OnboardingResponse> = {},
) => {
  return useMutation<OnboardingResponse>({
    ...onboardingOptions.postOnboarding(dto),
    ...queryOptions,
  })
}
