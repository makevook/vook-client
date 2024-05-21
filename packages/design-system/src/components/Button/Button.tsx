import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { Text, TextProps } from '../Text'
import { Icon } from '../../assets/Icon'
import { IconType } from '../../assets/Icon/Icon'

import { ButtonVariants, button } from './Button.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  ButtonVariants &
  IconType

const ButtonLabelType: {
  [key in Exclude<ButtonProps['size'], undefined>]: TextProps['type']
} = {
  large: 'body-1',
  middle: 'body-2',
  small: 'label',
  mini: 'label',
}

export const Button = ({
  filled = true,
  size = 'large',
  blueLine = true,
  disabled = false,
  name,
  children,
  ...rest
}: ButtonProps) => {
  const textType = ButtonLabelType[size]
  const fontWeight: TextProps['fontWeight'] =
    size === 'mini' ? 'medium' : 'bold'

  return (
    <button
      disabled={disabled}
      className={button({ filled, size, disabled, blueLine })}
      type="button"
      {...rest}
    >
      {name && <Icon name={name} size="small" />}
      <Text type={textType} fontWeight={fontWeight} color="inherit">
        {children}
      </Text>
    </button>
  )
}
