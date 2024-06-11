import { PropsWithChildren } from 'react'

import { selectBoxGroup } from './SelectBoxGroup.css'

export const SelectBoxGroup = ({ children }: PropsWithChildren) => {
  return <div className={selectBoxGroup}>{children}</div>
}
