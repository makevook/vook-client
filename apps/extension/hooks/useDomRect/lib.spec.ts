import {
  delayPromise,
  getMousePosition,
  getSelectionPosition,
  isExtensionArea,
} from './lib'

describe('delayPromise test', () => {
  it.each([{ delay: 500 }, { delay: 1000 }])(
    '지정된 지연 시간 이후에 resolve 해야한다.',
    async ({ delay }) => {
      // given
      const startTime = Date.now()

      // when
      await delayPromise(delay)

      // then
      const endTime = Date.now()
      const elapsed = endTime - startTime
      expect(elapsed).toBeGreaterThanOrEqual(delay)
    },
  )
})

describe('getMousePosition test', () => {
  it('올바른 마우스 위치를 반환해야한다', () => {
    // given
    const event = new MouseEvent('click', { clientX: 100, clientY: 200 })

    // when
    const position = getMousePosition(event)

    // then
    expect(position).toEqual({ x: 100, y: 200 })
  })
})

describe('getSelectionPosition test', () => {
  it('domRect의 너비가 300보다 큰 경우 경우 Selection의 좌측 모서리를 반환해야한다', () => {
    // given
    const domRect = {
      width: 400,
      left: 100,
      right: 500,
      bottom: 200,
    } as DOMRect

    // when
    const position = getSelectionPosition(domRect)

    // then
    expect(position).toEqual({
      x: 100,
      y: 200,
    })
  })

  it('domRect의 너비가 300보다 작거나 같은 경우 Selection의 우측 모서리를 반환해야한다', () => {
    // given
    const domRect = {
      width: 200,
      left: 100,
      right: 300,
      bottom: 200,
    } as DOMRect

    // when
    const position = getSelectionPosition(domRect)

    // then
    expect(position).toEqual({
      x: 300,
      y: 200,
    })
  })

  it('현재 스크롤 위치를 반영한 값을 반환한다.', () => {
    // given
    vi.stubGlobal('window', { scrollX: 100, scrollY: 200 })

    const domRect = {
      width: 200,
      left: 100,
      right: 300,
      bottom: 200,
    } as DOMRect

    // when
    const position = getSelectionPosition(domRect)

    // then
    expect(position).toEqual({
      x: 400,
      y: 400,
    })
  })
})

describe('isExtensionArea test', () => {
  it('target이 PLASMO-CSUI 요소인 경우 true를 반환해야한다', () => {
    // given
    const target = document.createElement('PLASMO-CSUI')

    // when
    const result = isExtensionArea(target)

    // then
    expect(result).toBe(true)
  })

  it('target이 PLASMO-CSUI 요소가 아닌 경우 false를 반환해야한다', () => {
    // given
    const target = document.createElement('div')

    // when
    const result = isExtensionArea(target)

    // then
    expect(result).toBe(false)
  })
})
