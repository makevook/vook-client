import {
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useLayoutEffect,
  useState,
} from 'react'

import { Text } from '../Text'
import { Icon, IconProps } from '../Icon'

import { SelectBoxVariants, fakeSelectBox, selectBox } from './SelectBox.css'

export type SelectBoxProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren &
  SelectBoxVariants & {
    prefixIcon?: Exclude<IconProps['name'], undefined>
    suffixIcon?: Exclude<IconProps['name'], undefined>
  }

export const SelectBox = forwardRef<HTMLDivElement, SelectBoxProps>(
  (props, ref) => {
    const { fit, prefixIcon, suffixIcon, children, ...rest } = props

    const [selected, setSelected] = useState(
      rest.selected === undefined ? false : rest.selected,
    )

    useLayoutEffect(() => {
      setSelected(rest.selected === undefined ? false : rest.selected)
    }, [rest.selected])

    return (
      <div
        aria-selected={selected}
        className={selectBox({ fit, selected })}
        ref={ref}
        {...rest}
      >
        {prefixIcon && <Icon name={prefixIcon} />}
        <label>
          <Text type="body-2" fontWeight="medium" color="common-black">
            {children}
          </Text>
          <input
            type="checkbox"
            checked={selected}
            name={children?.toString()}
            className={fakeSelectBox}
            onChange={() => {
              setSelected((prev) => !prev)
            }}
          />
          {suffixIcon && <Icon name={suffixIcon} />}
        </label>
      </div>
    )
  },
)

SelectBox.displayName = 'SelectBox'
