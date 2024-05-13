import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { button } from './Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className={button} type="button" {...rest}>
      {children}
    </button>
  )
}
