export const delayPromise = (ms: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms)
    }, ms),
  )
}

export const skipLoopCycleOnce = async () => delayPromise(1)

export const getMousePosition = (e: MouseEvent) => {
  return {
    x: e.pageX,
    y: e.pageY,
  }
}

export const getSelectionPosition = (domRect: DOMRect) => {
  return {
    x:
      domRect.width > 300
        ? domRect.left + scrollX
        : domRect.right + window.scrollX,
    y: domRect.bottom + window.scrollY,
  }
}

export const isExtensionArea = (target: HTMLElement) => {
  return target.nodeName === 'PLASMO-CSUI'
}
