'use client'

import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

import { Text } from '../Text'
import { Icon, sprinkles } from '../..'
import { IconNames } from '../Icon/icons'

import {
  InputVariants,
  input,
  inputIcon,
  inputLabel,
  requirementText,
  withIcon,
} from './Input.css'

export type InputProps = {
  label?: string
  invalid?: boolean
  icon?: IconNames
  readonly?: boolean
  requirement?: string
} & InputVariants &
  InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  label,
  width,
  invalid = false,
  requirement = '',
  readOnly = false,
  icon,
  ...rest
}: InputProps) => {
  const inputElement = (
    <span
      className={sprinkles({
        position: 'relative',
      })}
    >
      <input
        className={clsx({
          [input({ invalid })]: true,
          [withIcon]: icon !== undefined,
        })}
        readOnly={readOnly}
        aria-invalid={invalid}
        {...rest}
      />
      {icon && (
        <div className={inputIcon}>
          <Icon name={icon} />
        </div>
      )}
      {invalid && (
        <Text
          className={requirementText}
          type="label"
          fontWeight="regular"
          color="label-neutral"
        >
          {requirement}
        </Text>
      )}
    </span>
  )

  if (label) {
    return (
      <label className={inputLabel}>
        <Text type="body-2" fontWeight="medium" color="label-neutral">
          {label}
        </Text>
        {inputElement}
      </label>
    )
  }

  return <span>{inputElement}</span>
}
