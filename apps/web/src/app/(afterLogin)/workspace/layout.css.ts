import { style } from '@vanilla-extract/css'

export const workspaceContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 40,
  height: '100%',
})

export const workspaceInnerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
})

export const workspaceInnerAlignCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
})

export const workspaceInnerAlignRow = style({
  display: 'flex',
  alignSelf: 'start',
  flexWrap: 'wrap',
  gap: 20,
})
export const workspaceHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
})
