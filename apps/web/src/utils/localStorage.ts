export const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = <T>(key: string): T | null => {
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
}
