import { renderer } from '@/utils/testing'

import { ProfileEditForm } from './ProfileEditForm'

describe('ProfileEditForm test', () => {
  it('닉네임이 변경되지 않으면 저장하기 버튼이 비활성화 된다.', async () => {
    // given
    const { user, findByRole, findByLabelText } = renderer(<ProfileEditForm />)
    const nicknameInput = await findByLabelText('닉네임')
    const saveButton = await findByRole('button', { name: '저장하기' })

    // when
    await user.clear(nicknameInput)
    await user.type(nicknameInput, 'John Doe')

    expect(saveButton).toBeDisabled()
  })

  it('닉네임이 비어있으면 버튼이 비활성화 된다.', async () => {
    // given
    const { user, findByRole, findByLabelText } = renderer(<ProfileEditForm />)
    const nicknameInput = await findByLabelText('닉네임')
    const saveButton = await findByRole('button', { name: '저장하기' })

    // when
    await user.clear(nicknameInput)

    expect(saveButton).toBeDisabled()
  })

  it('닉네임이 변경되면 저장하기 버튼이 활성화 된다.', async () => {
    // given
    const { user, findByRole, findByLabelText } = renderer(<ProfileEditForm />)
    const nicknameInput = await findByLabelText('닉네임')
    const saveButton = await findByRole('button', { name: '저장하기' })

    // when
    await user.clear(nicknameInput)
    await user.type(nicknameInput, 'Jane Doe')

    expect(saveButton).toBeEnabled()
  })
})
