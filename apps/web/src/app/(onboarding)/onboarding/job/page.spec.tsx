import { renderer } from '@/utils/testing'

import { OnBoardingProvider } from '../_context/useOnboarding'

import OnboardingJobPage from './page'

describe('OnboardingJobPage test', () => {
  it('직업을 선택하지 않으면 시작하기 버튼이 비활성화된다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <OnBoardingProvider>
        <OnboardingJobPage />
      </OnBoardingProvider>,
    )
    const nextButton = await findByRole('button', {
      name: '시작하기',
    })

    // when
    await user.click(nextButton)

    // then
    expect(nextButton).toBeDisabled()
  })

  it('직업을 선택하면 해당 유입 경로가 선택되며 시작하기 버튼이 활성화된다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <OnBoardingProvider>
        <OnboardingJobPage />
      </OnBoardingProvider>,
    )
    const developerBox = await findByRole('checkbox', {
      name: '개발자',
    })
    const nextButton = await findByRole('button', {
      name: '시작하기',
    })

    // when
    await user.click(developerBox)

    // then
    expect(developerBox).toBeChecked()
    expect(nextButton).toBeEnabled()
  })

  it('직업 재선택하면 해당 직업이 선택되며 기존 직업이 비활성화된다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <OnBoardingProvider>
        <OnboardingJobPage />
      </OnBoardingProvider>,
    )
    const developerBox = await findByRole('checkbox', {
      name: '개발자',
    })
    const designerBox = await findByRole('checkbox', {
      name: '디자이너',
    })

    // when
    await user.click(developerBox)
    await user.click(designerBox)

    // then
    expect(developerBox).not.toBeChecked()
    expect(designerBox).toBeChecked()
  })

  it('온보딩 제출 중에는 시작하기가 비활성화된다.', async () => {
    // given
    const { user, findByRole } = renderer(
      <OnBoardingProvider>
        <OnboardingJobPage />
      </OnBoardingProvider>,
    )
    const developerBox = await findByRole('checkbox', {
      name: '개발자',
    })
    const nextButton = await findByRole('button', {
      name: '시작하기',
    })

    // when
    await user.click(developerBox)
    await user.click(nextButton)

    // then
    expect(nextButton).toBeDisabled()
  })
})
