import { createGlobalThemeContract } from '@vanilla-extract/css'

import { tokens } from '..'

import { createTokenScheme } from './utils'

export const vars = createGlobalThemeContract(createTokenScheme(tokens))
