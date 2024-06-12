import { renderer } from '@/utils/testing'

import { OnBoardingProvider } from '../_context/useOnboarding'

import OnboardingFunnelPage from './page'

describe('OnboardingFunnelPage test', () => {
  it('유입 경로를 선택하지 않으면 다음 버튼이 비활성화된다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <OnBoardingProvider>
        <OnboardingFunnelPage />
      </OnBoardingProvider>,
    )
    const nextButton = await findByRole('button', {
      name: '다음',
    })

    // when
    await user.click(nextButton)

    // then
    expect(nextButton).toBeDisabled()
  })

  it('유입 경로를 선택하면 해당 유입 경로가 선택되며 다음 버튼이 활성화된다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <OnBoardingProvider>
        <OnboardingFunnelPage />
      </OnBoardingProvider>,
    )
    const facebookBox = await findByRole('checkbox', {
      name: '페이스북',
    })
    const nextButton = await findByRole('button', {
      name: '다음',
    })

    // when
    await user.click(facebookBox)

    // then
    expect(facebookBox).toBeChecked()
    expect(nextButton).toBeEnabled()
  })

  it('유입 경로를 재선택하면 해당 유입 경로가 선택되며 기존 유입 경로가 비활성화된다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <OnBoardingProvider>
        <OnboardingFunnelPage />
      </OnBoardingProvider>,
    )
    const facebookBox = await findByRole('checkbox', {
      name: '페이스북',
    })
    const linkedInBox = await findByRole('checkbox', {
      name: '링크드인',
    })

    // when
    await user.click(facebookBox)
    await user.click(linkedInBox)

    // then
    expect(facebookBox).not.toBeChecked()
    expect(linkedInBox).toBeChecked()
  })
})
