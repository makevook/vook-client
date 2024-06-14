'use client'

import { Icon, Text } from '@vook-client/design-system'
import clsx from 'clsx'

import { useSearchBox } from '../hooks/useSearchBox'

import { deleteButton, historyIcon, searchHistory } from './SearchHistory.css'

interface SearchHistoryProps {
  vocabularyID: string
  history: string
  historyIndex: number
}

export const SearchHistory = ({
  history,
  historyIndex,
}: SearchHistoryProps) => {
  const { deleteHistory } = useSearchBox()

  return (
    <div className={searchHistory}>
      <div className={historyIcon}>
        <Icon name="backward-big" />
      </div>
      <Text color="semantic-label-normal" type="body-1">
        {history}
      </Text>
      <button
        className={clsx([deleteButton, 'delete-button'])}
        onClick={() => deleteHistory(historyIndex)}
      >
        <Icon name="close-icon-small" />
      </button>
    </div>
  )
}
