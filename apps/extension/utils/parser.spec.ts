import { stripHtmlTags } from './parser'

describe('stripHtmlTags test', () => {
  it('입력 문자열에서 모든 HTML 태그를 제거해야 한다.', () => {
    // given
    const input = '<p>Hello, <strong>world!</strong></p>'

    // when
    const result = stripHtmlTags(input)

    // then
    expect(result).toBe('Hello, world!')
  })

  it('빈 입력 문자열을 처리해야 한다.', () => {
    // given
    const input = ''

    // when
    const result = stripHtmlTags(input)

    // then
    expect(result).toBe('')
  })

  it('HTML 태그가 없는 입력 문자열을 처리해야 한다.', () => {
    // given
    const input = 'Hello, world!'

    // when
    const result = stripHtmlTags(input)

    // then
    expect(result).toBe('Hello, world!')
  })

  it('중첩된 HTML 태그가 있는 입력 문자열을 처리해야 한다.', () => {
    // given
    const input = '<p><strong>Hello, <em>world!</em></strong></p>'

    // when
    const result = stripHtmlTags(input)

    // then
    expect(result).toBe('Hello, world!')
  })
})
