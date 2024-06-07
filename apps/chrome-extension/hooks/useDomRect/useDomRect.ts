import { useEffect, useRef } from 'react'

import { selectionUtils } from '../../utils/selection'
import { useSelectedText, useToggle } from '../../store/toggle'

import {
  skipLoopCycleOnce,
  isExtensionArea,
  getMousePosition,
  getSelectionPosition,
} from './lib'

export const useDomRect = () => {
  const { changeIsSelected, setPosition, changeSearchWindow } = useToggle()
  const { setSelectedText } = useSelectedText()
  const isDragged = useRef<boolean>(false)
  const isMousedown = useRef<boolean>(false)

  useEffect(function addMouseEvent() {
    const onMouseup = async (e: MouseEvent) => {
      await skipLoopCycleOnce()

      if (e.target && isExtensionArea(e.target as HTMLElement)) {
        return
      }

      isMousedown.current = false

      const selectedText = selectionUtils.getSelectionText()
      const domRect = selectionUtils.getSelectionNodeRect()

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
