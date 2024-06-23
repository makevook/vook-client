import { UserStatus } from '@vook-client/api'

import { renderer } from '@/utils/testing'
import { ModalContextProvider } from '@/hooks/useModal/useModal'
import { UserProvider } from '@/store/user'
import { ToastContextProvider } from '@/hooks/useToast'

import { ProfileEditForm } from './ProfileEditForm'

describe('ProfileEditForm test', () => {
  it('닉네임이 변경되지 않으면 저장하기 버튼이 비활성화 된다.', async () => {
    // given
    const { user, findByRole, findByLabelText } = renderer(
      <ModalContextProvider>
        <ToastContextProvider>
          <UserProvider
            user={{
              nickname: 'John',
              email: '',
              onboardingCompleted: false,
              status: UserStatus.Registered,
              uid: '',
            }}
          >
            <ProfileEditForm />
          </UserProvider>
        </ToastContextProvider>
      </ModalContextProvider>,
    )
    const nicknameInput = (await findByLabelText('닉네임')) as HTMLInputElement
    const saveButton = await findByRole('button', { name: '저장하기' })

    // when
    await user.clear(nicknameInput)
    await user.type(nicknameInput, 'John')

    // then
    expect(saveButton).toBeDisabled()
  })

  it('닉네임이 비어있으면 버튼이 비활성화 된다.', async () => {
    // given
    const { user, findByRole, findByLabelText } = renderer(
      <ModalContextProvider>
        <ToastContextProvider>
          <ProfileEditForm />
        </ToastContextProvider>
      </ModalContextProvider>,
    )
    const nicknameInput = await findByLabelText('닉네임')
    const saveButton = await findByRole('button', { name: '저장하기' })

    // when
    await user.clear(nicknameInput)

    // then
    expect(saveButton).toBeDisabled()
  })

  it('닉네임은 10자 이상 입력할 수 없다.', async () => {
    // given
    const { user, findByLabelText } = renderer(
      <ModalContextProvider>
        <ToastContextProvider>
          <ProfileEditForm />
        </ToastContextProvider>
      </ModalContextProvider>,
    )
    const nicknameInput = await findByLabelText('닉네임')

    // when
    await user.clear(nicknameInput)
    await user.type(nicknameInput, 'a'.repeat(11))

    // then
    expect(nicknameInput).toHaveValue('a'.repeat(10))
  })

  it('닉네임이 변경되면 저장하기 버튼이 활성화 된다.', async () => {
    // given
    const { user, findByRole, findByLabelText } = renderer(
      <ModalContextProvider>
        <ToastContextProvider>
          <ProfileEditForm />
        </ToastContextProvider>
      </ModalContextProvider>,
    )
    const nicknameInput = await findByLabelText('닉네임')
    const saveButton = await findByRole('button', { name: '저장하기' })

    // when
    await user.clear(nicknameInput)
    await user.type(nicknameInput, 'Jane Doe')

    // then
    expect(saveButton).toBeEnabled()
  })
})
