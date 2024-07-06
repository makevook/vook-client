'use client'

import { Icon, Text } from '@vook-client/design-system'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import dayjs from 'dayjs'

import { useSearchBox } from '../hooks/useSearchBox'
import { SearchHistoryItem } from '../hooks/useSearchHistory'

import {
  deleteButton,
  historyContent,
  historyIcon,
  searchHistory,
} from './SearchHistory.css'

interface SearchHistoryProps extends HTMLAttributes<HTMLDivElement> {
  history: SearchHistoryItem
  historyIndex: number
}

export const SearchHistory = ({
  history,
  historyIndex,
  ...rest
}: SearchHistoryProps) => {
  const { deleteHistory } = useSearchBox()

  return (
    <div className={searchHistory} {...rest}>
      <div className={historyIcon}>
        <Icon name="backward-big" />
      </div>
      <div className={historyContent}>
        <Text color="semantic-label-normal" type="body-1">
          {history.value}
        </Text>
        <Text color="semantic-label-assistive" type="body-2">
          {dayjs(history.date).format('YY-MM-DD')}
        </Text>
      </div>
      <button
        className={clsx([deleteButton, 'delete-button'])}
        onClick={(e) => {
          e.stopPropagation()
          deleteHistory(historyIndex)
        }}
      >
        <Icon name="close-icon-small" />
      </button>
    </div>
  )
}
