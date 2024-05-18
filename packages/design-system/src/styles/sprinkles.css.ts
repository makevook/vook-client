import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { vars } from './global.css'

const fontProperties = defineProperties({
  properties: {
    color: vars.colors,
    fill: vars.colors,
    textAlign: ['center', 'left', 'right'],
    whiteSpace: [
      'normal',
      'nowrap',
      'pre',
      'pre-line',
      'pre-wrap',
      'initial',
      'inherit',
    ],
    textOverflow: [
      'clip',
      'ellipsis',
      'inherit',
      'initial',
      'revert',
      'revert-layer',
    ],
  },
})
const layoutProperties = defineProperties({
  properties: {
    display: ['block', 'flex', 'grid', 'inline-block', 'none'],
    flexGrow: [0, 1],
    flexDirection: ['column', 'row', 'column-reverse', 'row-reverse'],
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'stretch',
      'space-around',
      'space-between',
    ],
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    gap: vars.size,
    width: ['fit-content', 'inherit', 'initial', 'max-content', 'min-content'],
    height: ['fit-content', 'inherit', 'initial', 'max-content', 'min-content'],

    position: ['static', 'relative', 'sticky', 'absolute', 'fixed'],
    top: vars.size,
    left: vars.size,
    right: vars.size,
    bottom: vars.size,

    margin: vars.size,
    marginLeft: vars.size,
    marginRight: vars.size,
    marginTop: vars.size,
    marginBottom: vars.size,
    marginBlock: vars.size,
    marginInline: vars.size,

    padding: vars.size,
    paddingLeft: vars.size,
    paddingRight: vars.size,
    paddingTop: vars.size,
    paddingBottom: vars.size,
    paddingBlock: vars.size,
    paddingInline: vars.size,

    overflow: ['auto', 'hidden', 'scroll', 'unset'],

    cursor: ['default', 'pointer', 'not-allowed'],
    background: vars.colors,
    backgroundColor: vars.colors,
    zIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
})

export const sprinkles = createSprinkles(fontProperties, layoutProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
