import { Button, Checkbox, Input, Text } from '@vook-client/design-system'

import {
  checkboxGroup,
  divider,
  signUpCheckboxField,
  signUpForm,
  signUpFormHeader,
  signUpInputField,
  termsLink,
} from './SignUpForm.css'

export const SignUpForm = () => {
  return (
    <form className={signUpForm}>
      <div className={signUpFormHeader}>
        <Text color="semantic-label-title" type="title-2" fontWeight="bold">
          회원가입
        </Text>
      </div>
      <div className={signUpInputField}>
        <Input
          icon="google"
          label="구글 계정"
          value="test@gamil.com"
          disabled
        />
        <Input label="닉네임" placeholder="닉네임 입력" />
      </div>
      <div className={signUpCheckboxField}>
        <div className={checkboxGroup}>
          <Checkbox id="terms-of-use" onChange={() => {}} />
          <label htmlFor="terms-of-use">
            <Text as="span" color="semantic-label-alternative" type="body-1">
              <a href="/" target="_blank" className={termsLink}>
                이용 약관
              </a>{' '}
              동의(필수)
            </Text>{' '}
          </label>
        </div>
        <div className={divider} />
        <div className={checkboxGroup}>
          <Checkbox id="privacy-policy" onChange={() => {}} />
          <label htmlFor="privacy-policy">
            <Text as="span" color="semantic-label-alternative" type="body-1">
              <a href="/" target="_blank" className={termsLink}>
                개인정보 이용 수집
              </a>{' '}
              동의(필수)
            </Text>
          </label>
        </div>
        <div className={checkboxGroup}>
          <Checkbox id="receive-marketing-emails" onChange={() => {}} />
          <label htmlFor="receive-marketing-emails">
            <Text as="span" color="semantic-label-alternative" type="body-1">
              마케팅 메일 수신 동의(필수)
            </Text>
          </label>
        </div>
      </div>
      <Button fit="fill">가입하기</Button>
    </form>
  )
}
