import { Icon } from '@vook-client/design-system'

import { Toast } from '../Toast'

interface ErrorToastProps {
  id: number
  message: string
  disappear?: boolean
}

const ErrorToast = ({ id, message, disappear }: ErrorToastProps) => {
  return (
    <Toast disappear={disappear} id={id}>
      <Icon name="alert-error-big" />
      <Toast.Content>
        <Toast.Title>{message}</Toast.Title>
      </Toast.Content>
    </Toast>
  )
}

export default ErrorToast
