import { Meta, StoryObj } from '@storybook/react'

import { colors } from './colors'

const meta = {
  title: 'Colors',
  tags: ['autodocs'],
} satisfies Meta

export default meta

export const Playground: StoryObj = {
  render: () => {
    return (
      <ul className="storybook-list">
        {Object.keys(colors).map((color) => {
          return (
            <li key={color}>
              <p className="storybook-subtitle">{color}</p>
              <div
                style={{
                  width: '80px',
                  aspectRatio: '1/1',
                  borderRadius: '50%',
                  backgroundColor: colors[color as keyof typeof colors],
                }}
              />
            </li>
          )
        })}
      </ul>
    )
  },
}
