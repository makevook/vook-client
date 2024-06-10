import '@testing-library/jest-dom'

import { cleanup } from '@testing-library/react'

vi.mock('next/font/local', () => {
  return {
    default: () => {},
  }
})

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
