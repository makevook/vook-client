import { style, createVar, keyframes } from '@vanilla-extract/css'

export const accentVar = createVar()

const bounce = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-80px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
})

export const IconBoxContainer = style({
  width: 120,
  height: 120,
  borderRadius: 10.55,
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'inherit',
  animation: `${bounce} 3s infinite`,
})

export const CardContainer = style({
  width: 460,
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  boxShadow: '0px 4px 12px #EAEAEA',
  borderRadius: 20,
})

export const CardContainerHeader = style({
  width: 460,
  padding: 32,
})

export const CardContainerFooter = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  padding: '5px 32px 29px',
})

export const IconContainer = style({
  width: 32,
  height: 32,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateY(-5px)',
})
