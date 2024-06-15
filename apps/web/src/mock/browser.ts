import { handlers } from '@vook-client/api'
import { setupWorker } from 'msw/browser'

export const worker = setupWorker(...handlers)
