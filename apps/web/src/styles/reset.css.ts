import { globalStyle } from '@vanilla-extract/css'

globalStyle('html', {
  scrollBehavior: 'smooth',
  scrollbarGutter: 'stable',
})

globalStyle('body', {
  overflow: 'auto',
})

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('ul', {
  listStyle: 'none',
})

globalStyle('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
})

globalStyle('body.scroll-locked', {
  overflow: 'hidden',
})
