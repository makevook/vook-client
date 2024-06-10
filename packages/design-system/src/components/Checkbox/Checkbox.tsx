import { ChangeEventHandler, InputHTMLAttributes, useState } from 'react'

import {
  checkIcon,
  checkboxContainer,
  checkboxOutline,
  checkedBox,
  realCheckboxInput,
} from './Checkbox.css'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onChange: ChangeEventHandler<HTMLInputElement>
}

const CheckIcon = (
  <svg
    width="9"
    height="7"
    viewBox="0 0 9 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={checkIcon}
  >
    <path
      d="M7.72151 1L3.4545 5.267L1 2.8125"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Checkbox = ({
  defaultChecked = false,
  tabIndex = 0,
  onChange,
  ...rest
}: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked)

  return (
    <div className={checkboxContainer}>
      <div className={checkboxOutline}>
        {checked && <div className={checkedBox} />}
        {checked && CheckIcon}
      </div>
      <input
        className={realCheckboxInput}
        onChange={(e) => {
          onChange(e)
          setChecked(e.target.checked)
        }}
        type="checkbox"
        aria-checked={checked}
        tabIndex={tabIndex}
        checked={checked}
        {...rest}
      />
    </div>
  )
}
