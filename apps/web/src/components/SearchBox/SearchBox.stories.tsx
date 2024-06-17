import type { Meta, StoryObj } from '@storybook/react'

import { localStorageUtils } from '@/utils/localStorage'

import { SearchBox } from './SearchBox'
import { SearchHistoryProvider } from './hooks/useSearchHistory'

const meta: Meta<typeof SearchBox> = {
  title: 'GNB/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      localStorageUtils.setLocalStorage('id_searchHistory', [
        '단어1',
        '단어2',
        '단어3',
        '단어4',
        '단어5',
      ])

      return (
        <div
          style={{
            height: '100vh',
          }}
        >
          <SearchHistoryProvider vocabularyID="id">
            <Story />
          </SearchHistoryProvider>
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {}
