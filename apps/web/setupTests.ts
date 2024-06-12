import '@testing-library/jest-dom'

import { cleanup } from '@testing-library/react'
import { mswServer } from '@vook-client/api'
import { afterEach } from 'vitest'

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
