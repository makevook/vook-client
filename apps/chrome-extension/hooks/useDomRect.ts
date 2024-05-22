import { useEffect, useRef } from 'react'

import { getSelectionNodeRect, getSelectionText } from '../utils/selection'
import { useSelectedText, useToggle } from '../store/toggle'

async function delayPromise(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms)
    }, ms),
  )
}

const skipLoopCycleOnce = async () => delayPromise(1)

const getMousePosition = (e: MouseEvent) => {
  return {
    x: e.pageX,
    y: e.pageY,
  }
}

const getSelectionPosition = (domRect: DOMRect) => {
  return {
    x:
      domRect.width > 300
        ? domRect.left + scrollX
        : domRect.right + window.scrollX,
    y: domRect.bottom + window.scrollY,
  }
}

const isExtensionArea = (target: EventTarget) => {
  const ElementTarget = target as HTMLElement
  return ElementTarget.nodeName === 'PLASMO-CSUI'
}

export const useDomRect = () => {
  const { changeIsSelected, setPosition, changeSearchWindow } = useToggle()
  const { setSelectedText } = useSelectedText()
  const isDragged = useRef<boolean>(false)
  const isMousedown = useRef<boolean>(false)

  useEffect(() => {
    const onMouseup = async (e: MouseEvent) => {
      await skipLoopCycleOnce()

      if (isExtensionArea(e.target)) {
        return
      }

      isMousedown.current = false

      const selectedText = getSelectionText()

      const domRect = getSelectionNodeRect()

      if (selectedText.length > 0 && domRect) {
        setSelectedText(selectedText)
        setPosition(
          isDragged.current
            ? getMousePosition(e)
            : getSelectionPosition(domRect),
        )

        changeIsSelected(true)
        return
      }

      setSelectedText('')
      changeIsSelected(false)
      changeSearchWindow(false)
    }

    const onMousedown = () => {
      isMousedown.current = true
    }

    const onMousemove = async () => {
      await skipLoopCycleOnce()

      if (isMousedown.current) {
        isDragged.current = true
      } else {
        isDragged.current = false
      }
    }

    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
    document.addEventListener('mousedown', onMousedown)

    return () => {
      document.removeEventListener('mouseup', onMouseup)
      document.removeEventListener('mousemove', onMousemove)
      document.removeEventListener('mousedown', onMousedown)
    }
  })
}
