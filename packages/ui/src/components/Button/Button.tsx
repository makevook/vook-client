import { PropsWithChildren } from 'react'

import { button } from './Button.css'

export const Button = ({ children }: PropsWithChildren) => {
  return <button className={button}>{children}</button>
}
