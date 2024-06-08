export const selectionUtils = {
  getSelectionText() {
    return window.getSelection()?.toString().trim() ?? ''
  },

  getSelectionNodeRect() {
    try {
      return (
        window.getSelection()?.getRangeAt(0)?.getBoundingClientRect() ?? null
      )
    } catch {
      return null
    }
  },
}
