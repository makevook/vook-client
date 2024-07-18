import '@testing-library/jest-dom'

// @ts-ignore
import { afterEach } from 'vitest'

// @ts-ignore
import { cleanup } from '@testing-library/react'

// @ts-ignore
vi.mock('next/font/local', () => {
  return {
    default: () => {},
  }
})

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
