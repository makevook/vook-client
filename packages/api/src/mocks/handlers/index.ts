import { authHandlers } from './auth'
import { userHandlers } from './user'

export const handlers = [...userHandlers, ...authHandlers]
