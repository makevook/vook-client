'use client'

import { Button, Checkbox, Input, Text } from '@vook-client/design-system'
import { useSignUpMutation, useUserInfoQuery } from '@vook-client/api'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEventHandler, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import z from 'zod'
import Cookies from 'js-cookie'

import {
  checkboxGroup,
  divider,
  signUpCheckboxField,
  signUpForm,
  signUpFormHeader,
  signUpInputField,
  termsLink,
} from './SignUpForm.css'

const signUpSchema = z.object({
  nickname: z.string().min(1).max(10),
  requiredTermsAgree: z.literal(true),
  policyAgree: z.literal(true),
  marketingEmailOptIn: z.boolean(),
})

export const SignUpForm = () => {
  const access = Cookies.get('access')
  const refresh = Cookies.get('refresh')

  const userInfoQuery = useUserInfoQuery({
    access: access || '',
    refresh: refresh || '',
  })

  const { register, handleSubmit, setValue, watch, formState } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      nickname: '',
      requiredTermsAgree: false,
      policyAgree: false,
      marketingEmailOptIn: false,
    },
  })
  const router = useRouter()

  const signUpMutation = useSignUpMutation(
    {
      nickname: watch('nickname'),
      requiredTermsAgree: watch('requiredTermsAgree'),
      marketingEmailOptIn: watch('marketingEmailOptIn'),
    },
    {
      onSuccess: () => {
        router.push('/onboarding')
      },
    },
  )

  const isAllChecked = useMemo(
    () =>
      watch('requiredTermsAgree') &&
      watch('policyAgree') &&
      watch('marketingEmailOptIn'),
    [watch],
  )

  const isSubmitting = useMemo(
    () => signUpMutation.isPending,
    [signUpMutation.isPending],
  )

  const canSubmit = useMemo(
    () =>
      !formState.isValid ||
      signUpMutation.isPending ||
      signUpMutation.isSuccess,
    [formState.isValid, signUpMutation.isPending, signUpMutation.isSuccess],
  )

  if (!userInfoQuery.data) {
    return null
  }

  const email = userInfoQuery.data.result.email

  const onSubmit = handleSubmit(() => {
    signUpMutation.mutate()
  })

  const onCheckAll: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue('requiredTermsAgree', e.target.checked, { shouldValidate: true })
    setValue('policyAgree', e.target.checked, { shouldValidate: true })
    setValue('marketingEmailOptIn', e.target.checked, { shouldValidate: true })
  }

  return (
    <form className={signUpForm} onSubmit={onSubmit}>
      <div className={signUpFormHeader}>
        <Text color="semantic-label-title" type="title-2" fontWeight="bold">
          회원가입
        </Text>
      </div>
      <div className={signUpInputField}>
        <Input icon="google" label="구글 계정" value={email} disabled />
        <Input
          {...register('nickname')}
          label="닉네임"
          minLength={1}
          maxLength={10}
          placeholder="닉네임 입력"
        />
      </div>
      <div className={signUpCheckboxField}>
        <div className={checkboxGroup}>
          <Checkbox
            id="check-all"
            checked={isAllChecked}
            onChange={onCheckAll}
          />
          <label htmlFor="check-all">
            <Text
              as="span"
              color="label-neutral"
              type="body-1"
              fontWeight="bold"
            >
              전체 동의
            </Text>{' '}
          </label>
        </div>
        <div className={divider} />
        <div className={checkboxGroup}>
          <Checkbox
            {...register('requiredTermsAgree')}
            id="terms-of-use"
            checked={watch('requiredTermsAgree')}
          />
          <label htmlFor="terms-of-use">
            <Text as="span" color="semantic-label-alternative" type="body-1">
              <a href="/terms/use" target="_blank" className={termsLink}>
                이용 약관
              </a>{' '}
              동의(필수)
            </Text>{' '}
          </label>
        </div>
        <div className={checkboxGroup}>
          <Checkbox
            {...register('policyAgree')}
            id="privacy-policy"
            checked={watch('policyAgree')}
          />
          <label htmlFor="privacy-policy">
            <Text as="span" color="semantic-label-alternative" type="body-1">
              <a href="/terms/privacy" target="_blank" className={termsLink}>
                개인정보 이용 수집
              </a>{' '}
              동의(필수)
            </Text>
          </label>
        </div>
        <div className={checkboxGroup}>
          <Checkbox
            id="receive-marketing-emails"
            {...register('marketingEmailOptIn')}
            checked={watch('marketingEmailOptIn')}
          />
          <label htmlFor="receive-marketing-emails">
            <Text as="span" color="semantic-label-alternative" type="body-1">
              마케팅 메일 수신 동의(필수)
            </Text>
          </label>
        </div>
      </div>
      <Button
        type="submit"
        fit="fill"
        disabled={canSubmit}
        suffixIcon={isSubmitting ? 'spinner-big' : undefined}
      >
        가입하기
      </Button>
    </form>
  )
}
