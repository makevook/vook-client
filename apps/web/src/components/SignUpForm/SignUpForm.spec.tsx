import { screen } from '@testing-library/react'

import { renderer } from '@/utils/testing'

import { SignUpForm } from './SignUpForm'

describe('SignUpForm test', () => {
  const getFormElements = async () => {
    const nicknameInput = await screen.findByLabelText('닉네임')
    const termsOfUseButton =
      await screen.findByLabelText('이용 약관 동의(필수)')
    const policyButton =
      await screen.findByLabelText('개인정보 이용 수집 동의(필수)')
    const marketingButton =
      await screen.findByLabelText('마케팅 메일 수신 동의(선택)')
    const submitButton = await screen.findByRole('button')

    return {
      nicknameInput,
      termsOfUseButton,
      policyButton,
      marketingButton,
      submitButton,
    }
  }

  it.each([
    { nickname: 'a'.repeat(10) },
    { nickname: 'a'.repeat(11) },
    { nickname: 'a'.repeat(13) },
  ])('닉네임은 10자 이상으로 작성할 수 없다.', async ({ nickname }) => {
    // given
    const { user } = renderer(<SignUpForm />)
    const { nicknameInput } = await getFormElements()

    // when
    await user.type(nicknameInput, nickname)

    // then
    expect(nicknameInput).toHaveValue('aaaaaaaaaa')
  })

  it('이용약관을 동의하지 않으면 버튼이 비활성화된다.', async () => {
    // given
    const { user } = renderer(<SignUpForm />)
    const { nicknameInput, termsOfUseButton, submitButton } =
      await getFormElements()

    // when
    await user.type(nicknameInput, 'nickname')
    await user.click(termsOfUseButton)

    // then
    expect(submitButton).toBeDisabled()
  })

  it('개인정보 이용 수집을 동의하지 않으면 버튼이 비활성화된다.', async () => {
    // given
    const { user } = renderer(<SignUpForm />)
    const { nicknameInput, policyButton, submitButton } =
      await getFormElements()

    // when
    await user.type(nicknameInput, 'nickname')
    await user.click(policyButton)

    // then
    expect(submitButton).toBeDisabled()
  })

  it('닉네임을 입력하지 않으면 버튼이 비활성화된다.', async () => {
    // given
    const { user } = renderer(<SignUpForm />)
    const { termsOfUseButton, policyButton, submitButton } =
      await getFormElements()

    // when
    await user.click(policyButton)
    await user.click(termsOfUseButton)

    // then
    expect(submitButton).toBeDisabled()
  })

  it('닉네임과 필수약관을 모두 동의하면 버튼이 활성화된다.', async () => {
    // given
    const { user } = renderer(<SignUpForm />)
    const { nicknameInput, termsOfUseButton, policyButton, submitButton } =
      await getFormElements()

    // when
    await user.type(nicknameInput, 'nickname')
    await user.click(policyButton)
    await user.click(termsOfUseButton)

    // then
    expect(submitButton).toBeEnabled()
  })

  it('마케팅 메일 수신 약관은 선택사항이다.', async () => {
    // given
    const { user } = renderer(<SignUpForm />)
    const {
      nicknameInput,
      termsOfUseButton,
      policyButton,
      marketingButton,
      submitButton,
    } = await getFormElements()

    // when
    await user.type(nicknameInput, 'nickname')
    await user.click(policyButton)
    await user.click(termsOfUseButton)
    await user.click(marketingButton)

    // then
    expect(submitButton).toBeEnabled()

    // when
    await user.click(marketingButton)
    expect(submitButton).toBeEnabled()
  })

  it('양식 제출 중에는 버튼이 비활성화된다.', async () => {
    // given
    const { user } = renderer(<SignUpForm />)
    const { nicknameInput, termsOfUseButton, policyButton, submitButton } =
      await getFormElements()

    // when
    await user.type(nicknameInput, 'nickname')
    await user.click(policyButton)
    await user.click(termsOfUseButton)
    await user.click(submitButton)

    // then
    expect(submitButton).toBeDisabled()
  })
})
