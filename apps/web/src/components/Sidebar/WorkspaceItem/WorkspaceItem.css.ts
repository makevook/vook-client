import { style } from '@vanilla-extract/css'

export const workspaceItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  height: '100%',
})

export const workspaceItemTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
})

export const vocabularyDropbox = style({
  zIndex: 100,
})

export const vocabularyDropboxItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})
