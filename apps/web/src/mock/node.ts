import { handlers } from '@vook-client/api'
import { setupServer } from 'msw/node'

export const mswServer = setupServer(...handlers)
