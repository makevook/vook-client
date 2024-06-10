import { Meta, StoryObj } from '@storybook/react'

import { SymbolLogo } from '.'

const SymbolLogoSizes = [16, 24, 32, 40] as const

// List 컴포넌트의 Meta 정보 정의
const meta = {
  title: 'SymbolLogo',
  component: SymbolLogo,
  tags: ['autodocs'],
  args: {
    size: 16,
  },
  argTypes: {
    size: {
      options: SymbolLogoSizes,
      control: { type: 'select' },
      description: '심볼 로고 사이즈',
    },
  },
} satisfies Meta<typeof SymbolLogo>

export default meta

type Story = StoryObj<typeof SymbolLogo>

export const Playground: Story = {}

export const Sizes: Story = {
  render: () => {
    return (
      <ul className="storybook-list">
        {SymbolLogoSizes.map((size) => (
          <li key={size}>
            <p className="storybook-subtitle">{size}</p>
            <SymbolLogo size={size} />
          </li>
        ))}
      </ul>
    )
  },
}
