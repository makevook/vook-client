'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

import { Text } from '../Text'
import { sprinkles } from '../../styles/sprinkles.css'

import { inputBase, inputLabel } from './Textarea.css'

export type TextareaProps = {
  label?: string
  invalid?: boolean
  readOnly?: boolean
  requirement?: string
  placeholder?: string
} & InputHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      label,
      invalid = false,
      readOnly = false,
      placeholder = '',
      ...rest
    } = props

    const inputElement = (
      <span
        className={sprinkles({
          position: 'relative',
        })}
      >
        <textarea
          placeholder={placeholder}
          className={inputBase}
          ref={ref}
          readOnly={readOnly}
          aria-invalid={invalid}
          {...rest}
        />
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
  },
)

Textarea.displayName = 'Textarea'
