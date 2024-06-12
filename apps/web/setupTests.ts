import '@testing-library/jest-dom'
import { handlers } from '@vook-client/api'
import { setupServer } from 'msw/node'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

const mswServer = setupServer(...handlers)

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
