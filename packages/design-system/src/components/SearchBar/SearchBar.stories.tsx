import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { SearchBar } from './SearchBar'

// List 컴포넌트의 Meta 정보 정의
const meta = {
  title: 'SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    // wordHistory: [],
    // wordState: '',
    // setWordState: '',
  },
  argTypes: {
    wordHistory: {},
  },
} satisfies Meta<typeof SearchBar>

export default meta

type Story = StoryObj<typeof SearchBar>

export const Type: Story = {
  argTypes: {},
  render: () => {
    const [wordState, setWordState] = useState('')
    return (
      <ul className="storybook-list">
        <li>
          <p className="storybook-subtitle">SearchBar</p>
          <SearchBar
            wordHistory={['SDK', 'History', 'SDK']}
            wordState={wordState}
            setWordState={setWordState}
          />
        </li>
      </ul>
    )
  },
}
