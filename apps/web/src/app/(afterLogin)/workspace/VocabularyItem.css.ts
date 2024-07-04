import { vars } from '@vook-client/design-system'
import { style } from '@vanilla-extract/css'

export const vocabularyItemContainer = style({
  width: 380,
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: `1px solid ${vars.colors['semantic-line-normal']}`,
  borderRadius: 10,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',

  ':hover': {
    boxShadow: `0 4px 8px ${vars.colors['palette-gray-300']}`,
  },
})

export const vocabularyItemHeader = style({
  padding: 32,
})

export const vocabularyItemFooter = style({
  display: 'flex',
  height: 56,
  width: '100%',
  justifyContent: 'space-between',
  padding: '0 32px',
})

export const dropboxItem = style({
  display: 'flex',
  alignItems: 'center',
  width: 174,
  gap: 10,
})

export const dropboxIndex = style({
  zIndex: 5,
})
