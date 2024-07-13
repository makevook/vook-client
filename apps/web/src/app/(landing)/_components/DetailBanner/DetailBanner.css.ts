import { style } from '@vanilla-extract/css'
import { vars } from '@vook-client/design-system'

export const detailBannerSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 1180,
  gap: 22,
})

export const extensionSection = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 60,
  background: vars.colors['component-normal'],
  width: '100%',
  borderRadius: 30,
  border: `1px solid ${vars.colors['semantic-line-normal']}`,
})

export const workspaceSection = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 60,
  background: vars.colors['component-normal'],
  width: '100%',
  height: 680,
  borderRadius: 30,
  overflow: 'clip',
})

export const displaySection = style({
  width: '100%',
  height: 680,
  borderRadius: 30,
  background: 'linear-gradient(0deg, #B4B4F3 0%, #5D5CE5 100%)',
  outline: `1px solid ${vars.colors['semantic-line-normal']}`,
  overflow: 'clip',
})

export const displayContainer = style({
  background: '#fff',
  borderTop: `8px solid ${vars.colors['palette-gray-800']}`,
  borderLeft: `8px solid ${vars.colors['palette-gray-800']}`,
  borderTopLeftRadius: 30,
  borderBottomLeftRadius: 3,
  marginLeft: 100,
  marginTop: 100,
  height: 580,
  paddingLeft: 40,
  paddingTop: 40,
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
})

export const displayTermHeader = style({
  display: 'flex',
  background: vars.colors['component-alternative'],
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
  marginTop: 20,
})

export const displayTermHeaderItem = style({
  padding: '16px 12px',
})

export const displayTermItem = style({
  display: 'flex',
  padding: '8px 0 9px 0',
  borderBottom: `1px solid ${vars.colors['semantic-line-alternative']}`,
})
