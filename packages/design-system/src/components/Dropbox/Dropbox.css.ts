import { keyframes, style } from '@vanilla-extract/css'

import { vars } from '../../styles/global.css'

export const dropboxContainer = style({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
})

const appearAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.8)',
  },
  '50%': {
    opacity: 0.8,
    transform: 'scale(1.05)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
})

export const dropboxGroup = style({
  position: 'fixed',
  top: 0,
  left: 0,

  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',

  padding: 0,
  margin: 0,

  listStyle: 'none',

  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)',
  borderRadius: 6,

  transformOrigin: 'center center',
  backgroundColor: vars.colors['common-white'],

  opacity: 0,
  animation: `${appearAnimation} 0.3s ease forwards`,
  animationDelay: '0.01s',

  selectors: {
    '&.top.center': {
      transformOrigin: 'center bottom',
    },
    '&.top.left': {
      transformOrigin: 'right bottom',
    },
    '&.top.right': {
      transformOrigin: 'left bottom',
    },
    '&.bottom.center': {
      transformOrigin: 'center top',
    },
    '&.bottom.left': {
      transformOrigin: 'right top',
    },
    '&.bottom.right': {
      transformOrigin: 'left top',
    },
  },
})

export const dropboxTrigger = style({
  display: 'flex',
  height: 'fit-content',
})

export const dropboxOption = style({
  width: '100%',
  padding: '8px 10px',

  whiteSpace: 'nowrap',

  transition: 'background-color 0.4s',

  ':hover': {
    backgroundColor: vars.colors['palette-gray-50'],
    cursor: 'pointer',
  },
})
