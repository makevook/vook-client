import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { Text, TextProps } from '../Text'
import { Icon, IconProps } from '../Icon'

import { ButtonVariants, button } from './Button.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  ButtonVariants & {
    prefixIcon?: Exclude<IconProps['name'], undefined>
    suffixIcon?: Exclude<IconProps['name'], undefined>
  }

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
  fit = 'hug',
  prefixIcon,
  suffixIcon,
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
      className={button({ filled, fit, size, disabled, blueLine })}
      type="button"
      {...rest}
    >
      {prefixIcon && <Icon name={prefixIcon} />}
      <Text type={textType} fontWeight={fontWeight} color="inherit">
        {children}
      </Text>
      {suffixIcon && <Icon name={suffixIcon} />}
    </button>
  )
}
