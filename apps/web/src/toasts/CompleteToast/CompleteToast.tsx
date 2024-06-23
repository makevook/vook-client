import { Icon } from '@vook-client/design-system'

import { Toast } from '../Toast'

interface CompleteToastProps {
  id: number
  message: string
  disappear?: boolean
}

const CompleteToast = ({ id, message, disappear }: CompleteToastProps) => {
  return (
    <Toast disappear={disappear} id={id}>
      <Icon name="alert-success-big" />
      <Toast.Content>
        <Toast.Title>{message}</Toast.Title>
      </Toast.Content>
    </Toast>
  )
}

export default CompleteToast
