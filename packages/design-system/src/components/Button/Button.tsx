import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { Text, TextProps } from '../Text'
import { Icon, IconProps } from '../Icon'

import { ButtonVariants, blankIcon, button } from './Button.css'

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
  fit = 'fill',
  prefixIcon,
  suffixIcon,
  name,
  children,
  ...rest
}: ButtonProps) => {
  const textType = ButtonLabelType[size]
  const fontWeight: TextProps['fontWeight'] =
    size === 'mini' ? 'medium' : 'bold'

  const onlySuffixIcon = prefixIcon === undefined && suffixIcon !== undefined
  const onlyPrefixIcon = prefixIcon !== undefined && suffixIcon === undefined

  return (
    <button
      disabled={disabled}
      className={button({ filled, fit, size, disabled, blueLine })}
      type="button"
      {...rest}
    >
      {prefixIcon && <Icon name={prefixIcon} />}
      {onlySuffixIcon && (
        <div className={blankIcon}>
          <Icon className={blankIcon} name={suffixIcon} />
        </div>
      )}
      <Text type={textType} fontWeight={fontWeight} color="inherit">
        {children}
      </Text>
      {suffixIcon && <Icon name={suffixIcon} />}
      {onlyPrefixIcon && (
        <div className={blankIcon}>
          <Icon className={blankIcon} name={prefixIcon} />
        </div>
      )}
    </button>
  )
}
