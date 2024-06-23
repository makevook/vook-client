import { PropsWithChildren } from 'react'
import { Icon, Text } from '@vook-client/design-system'
import clsx from 'clsx'

import { useToast } from '@/hooks/useToast'

import { toast, toastContent } from './Toast.css'

interface ToastProps extends PropsWithChildren {
  id: number
  disappear?: boolean
}

const ToastContent = ({ children }: PropsWithChildren) => {
  return <div className={toastContent}>{children}</div>
}

const ToastTitle = ({ children }: PropsWithChildren) => {
  return (
    <Text type="body-1" fontWeight="medium" color="common-white">
      {children}
    </Text>
  )
}

const ToastText = ({ children }: PropsWithChildren) => {
  return (
    <Text type="body-2" color="palette-gray-300">
      {children}
    </Text>
  )
}

const ToastMain = ({ id, children, disappear }: ToastProps) => {
  const { deleteToast } = useToast()

  return (
    <div
      className={clsx({
        [toast]: true,
        disappear,
      })}
    >
      {children}
      <button
        onClick={() => {
          deleteToast(id)
        }}
      >
        <Icon name="close-grey-icon-small" />
      </button>
    </div>
  )
}

export const Toast = Object.assign(ToastMain, {
  Title: ToastTitle,
  Content: ToastContent,
  Text: ToastText,
})
