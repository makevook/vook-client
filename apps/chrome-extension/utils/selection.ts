export const selectionUtils = {
  getSelectionText(): string {
    return window.getSelection()?.toString().trim() ?? ''
  },

  getSelectionNodeRect(): DOMRect | undefined {
    try {
      return (
        window.getSelection()?.getRangeAt(0)?.getBoundingClientRect() ??
        undefined
      )
    } catch {
      return undefined
    }
  },
}
