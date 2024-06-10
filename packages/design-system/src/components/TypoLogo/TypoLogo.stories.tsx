import { Meta, StoryObj } from '@storybook/react'

import { TypoLogo } from '.'

const TypoLogoSizes = ['big', 'small'] as const

const meta = {
  title: 'TypoLogo',
  component: TypoLogo,
  tags: ['autodocs'],
  args: {
    size: 'big',
  },
  argTypes: {
    size: {
      options: TypoLogoSizes,
      control: { type: 'select' },
      description: '타이포 로고 사이즈',
    },
  },
} satisfies Meta<typeof TypoLogo>

export default meta

type Story = StoryObj<typeof TypoLogo>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => {
    return (
      <ul className="storybook-list">
        {TypoLogoSizes.map((size) => (
          <li key={size}>
            <p className="storybook-subtitle">{size}</p>
            <TypoLogo size={size} />
          </li>
        ))}
      </ul>
    )
  },
}
