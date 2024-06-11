import {
  ChangeEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useLayoutEffect,
  useState,
} from 'react'

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

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { onChange, ...rest } = props
    const [checked, setChecked] = useState(
      rest.checked === undefined ? false : rest.checked,
    )

    useLayoutEffect(() => {
      setChecked(rest.checked === undefined ? false : rest.checked)
    }, [rest.checked])

    return (
      <div className={checkboxContainer}>
        <div className={checkboxOutline} aria-checked={checked}>
          {checked && <div className={checkedBox} />}
          {checked && CheckIcon}
        </div>
        <input
          onChange={(e) => {
            setChecked((prev) => !prev)
            onChange(e)
          }}
          className={realCheckboxInput}
          ref={ref}
          type="checkbox"
          checked={checked}
          {...rest}
        />
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
