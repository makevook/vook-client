import { useEffect, useState } from 'react'

import { getSelectionNodeRect, getSelectionText } from '../utils/selection'

async function delayPromise(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms)
    }, ms),
  )
}

const skipLoopCycleOnce = async () => delayPromise(1)

export const useDomRect = () => {
  const [selectedText, setSelectedText] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)
  const [domRect, setDomRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    const onMouseup = async () => {
      const selectedText = getSelectionText()
      await skipLoopCycleOnce()

      if (selectedText.length > 0) {
        setSelectedText(selectedText)
        setDomRect(getSelectionNodeRect())
        setToggle(true)
        return
      }

      setSelectedText('')
      setToggle(false)
    }

    document.addEventListener('mouseup', onMouseup)

    return () => {
      document.removeEventListener('mouseup', onMouseup)
    }
  })

  return { domRect, selectedText, toggle }
}
