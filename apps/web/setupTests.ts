import '@testing-library/jest-dom'

import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

vi.mock('next/font/local', () => {
  return {
    default: () => {},
  }
})

afterEach(() => {
  cleanup()
})
