import { keyframes, style } from '@vanilla-extract/css'

export const heroBannerSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBlock: 180,
})

export const heroTitle = style({
  display: 'flex',
  marginBottom: 32,
})

export const subTitle = style({
  marginBottom: 60,
})

const draw = keyframes({
  '0%': {
    transform: 'scaleX(0%)',
  },
  '100%': {
    transform: 'scaleX(100%)',
  },
})

export const highlightBox = style({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
})

export const yellowFont = style({
  color: '#FECA12',
})

export const yellowBlock = style({
  backgroundColor: '#FFF8D5',
  width: 110,
  animation: `${draw} 0.5s ease-in-out 1.5s forwards`,
})

export const blueBlock = style({
  backgroundColor: '#EFEFFC',
  width: 154,
  animation: `${draw} 0.5s ease-in-out 2s forwards`,
})

export const highlight = style({
  position: 'absolute',
  left: -7,
  height: 73,
  borderRadius: 6,
  zIndex: -1,
  transformOrigin: 'left',
  transform: 'scaleX(0%)',
})
