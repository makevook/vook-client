import { style } from '@vanilla-extract/css'

export const workspaceItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'relative',

  width: '100%',
  height: '100%',
})

export const workspaceItemTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
})

// export const workspaceItemDropdownTrigger = style({
//   position: 'absolute',
//   top: '50%',
//   right: 10,

//   transform: 'translateY(-50%)',
//   opacity: 0,

//   transition: 'opacity 0.4s',

//   selectors: {
//     [`${workspaceItemTitle}:hover &`]: {
//       opacity: 1,
//     },
//   },
// })

// export const workspaceItemDropdownItem = style({
//   display: 'flex',
//   justifyContent: 'space-between',
//   gap: 4,
//   alignItems: 'center',
//   width: '100%',
// })

export const vocabularyTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})

// export const vocabularyDropboxTrigger = style({
//   position: 'absolute',
//   right: 10,
//   top: 10,

//   transition: 'opacity 0.4s, background-color 0.4s',
//   opacity: 0,

//   borderRadius: 6,

//   selectors: {
//     [`${vocabularyTitle}:hover &`]: {
//       opacity: 1,
//     },
//   },

//   ':hover': {
//     backgroundColor: vars.colors['palette-gray-50'],
//   },
// })

// export const vocabularyDropboxItem = style({
//   display: 'flex',
//   justifyContent: 'space-between',
//   gap: 4,
//   alignItems: 'center',
//   width: '100%',
// })
