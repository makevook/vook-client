export const localStorageUtils = {
  setLocalStorage: (key: string, value: unknown) => {
    if (global?.document === undefined) {
      return
    }
    localStorage.setItem(key, JSON.stringify(value))
  },

  getLocalStorage: <T>(key: string): T | null => {
    if (global?.document === undefined) {
      return null
    }
    try {
      const value = localStorage.getItem(key)

      if (!value) {
        return null
      }

      const result = JSON.parse(value) as T
      return result
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return null
    }
  },
}
