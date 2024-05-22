import { useEffect } from 'react'

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

export const useDomRect = () => {
  const { changeIsSelected, setPosition, changeSearchWindow } = useToggle()
  const { setSelectedText } = useSelectedText()

  useEffect(() => {
    const onMouseup = async () => {
      const selectedText = getSelectionText().trim()
      await skipLoopCycleOnce()
      const domRect = getSelectionNodeRect()

      if (selectedText.length > 0 && domRect) {
        setSelectedText(selectedText)

        setPosition({
          x: domRect.right + window.scrollX,
          y: domRect.bottom + window.scrollY,
        })
        changeIsSelected(true)
        return
      }

      setSelectedText('')
      changeIsSelected(false)
      changeSearchWindow(false)
    }

    document.addEventListener('mouseup', onMouseup)

    return () => {
      document.removeEventListener('mouseup', onMouseup)
    }
  })
}
