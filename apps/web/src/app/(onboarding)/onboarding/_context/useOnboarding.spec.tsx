import { act, renderHook } from '@testing-library/react'
import { OnboardingFunnel, OnboardingJob } from '@vook-client/api'

import { OnBoardingProvider, useOnBoarding } from './useOnboarding'

describe('useOnboarding test', () => {
  it('useOnboarding은 useOnboardingContext 내에서 호출되어야 한다.', () => {
    expect(() => {
      renderHook(useOnBoarding, {
        wrapper: ({ children }) => <div>{children}</div>,
      })
    }).toThrow('useOnBoarding은 OnBoardingProvider 내에서 사용되어야 합니다.')
  })

  it('funnel과 job의 초기값은 null이다.', () => {
    // given
    const { result } = renderHook(useOnBoarding, {
      wrapper: ({ children }) => (
        <OnBoardingProvider>{children}</OnBoardingProvider>
      ),
    })

    // when & then
    expect(result.current.funnel).toBeNull()
    expect(result.current.job).toBeNull()
  })

  it('setFunnel 호출시 funnel이 변경된다.', () => {
    // given
    const { result } = renderHook(useOnBoarding, {
      wrapper: ({ children }) => (
        <OnBoardingProvider>{children}</OnBoardingProvider>
      ),
    })

    // when
    act(() => {
      result.current.setFunnel(OnboardingFunnel.BLOG)
    })

    // when & then
    expect(result.current.funnel).toBe(OnboardingFunnel.BLOG)
  })

  it('setJob 호출시 job이 변경된다.', () => {
    // given
    const { result } = renderHook(useOnBoarding, {
      wrapper: ({ children }) => (
        <OnBoardingProvider>{children}</OnBoardingProvider>
      ),
    })

    // when
    act(() => {
      result.current.setJob(OnboardingJob.DEVELOPER)
    })

    // when & then
    expect(result.current.job).toBe(OnboardingJob.DEVELOPER)
  })
})
