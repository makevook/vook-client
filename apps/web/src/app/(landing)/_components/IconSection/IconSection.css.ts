import { keyframes, style } from '@vanilla-extract/css'

export const iconSection = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 720,
})

export const iconContainer = style({
  position: 'relative',
  left: 0,

  width: 1700,
  height: '100%',
})

export const iconTitle = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  top: 150,
})

const drag = keyframes({
  '0%': {
    transform: 'scaleX(0%)',
  },
  '100%': {
    transform: 'scaleX(100%)',
  },
})

export const dragBlock = style({
  position: 'absolute',
  zIndex: -1,
  opacity: 0.22,
  backgroundColor: '#0077FF',
  width: '99%',
  height: 55,
  top: -2,
  left: 5,
  transformOrigin: 'left',
  transform: 'scaleX(0%)',
  animation: `${drag} 0.5s ease-in-out forwards`,
})
