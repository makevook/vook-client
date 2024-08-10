import { createVar, style } from '@vanilla-extract/css'

export const accentVar = createVar()

export const IconContainer = style({
  width: 32,
  height: 32,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateY(-5px)',
})

export const CardContainer = style({
  width: 460,
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  boxShadow: '0px 4px 12px #EAEAEA',
  borderRadius: 20,
  backgroundColor: '#fff',
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
