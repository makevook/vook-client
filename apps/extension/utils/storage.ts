import { Storage } from '@plasmohq/storage'

const storage = new Storage({
  area: 'local',
})

export const setStorage = async (key: string, value: unknown) => {
  await storage.set(key, value)
}

export const getStorage = async <T>(key: string): Promise<T | undefined> => {
  return storage.get<T>(key)
}

export const removeStorage = async (key: string) => {
  await storage.remove(key)
}
