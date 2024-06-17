import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

import { mswServer } from './src/mock/node'

vi.mock('next/font/local', () => {
  return {
    default: () => {},
  }
})

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

afterEach(() => {
  cleanup()
})

beforeAll(() => mswServer.listen())

afterAll(() => mswServer.close())
