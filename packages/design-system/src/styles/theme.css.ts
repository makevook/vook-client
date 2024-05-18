import { createGlobalTheme } from '@vanilla-extract/css'

import { tokens } from '../tokens'

import { vars } from './global.css'

createGlobalTheme(':root', vars, tokens)
