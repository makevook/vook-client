import { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'

import { Select } from './Select'

const meta: Meta = {
  title: 'Select',
  component: Select,
  args: {
    vertical: 'top',
    horizontal: 'left',
  },
  argTypes: {
    vertical: {
      options: ['top', 'bottom'],
      control: { type: 'radio' },
      description: '상하 위치',
    },
    horizontal: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: '좌우 위치',
    },
  },
  parameters: {
    layout: 'centered',
  },
  render: (props) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          width: '500px',
        }}
      >
        <Select>
          <Select.Trigger>
            <Icon name="search-big" />
          </Select.Trigger>
          <Select.Group
            vertical={(props?.vertical as 'top' | 'bottom') || 'top'}
            horizontal={(props?.horizontal as 'left' | 'right') || 'right'}
          >
            <Select.Option>환경설정</Select.Option>
            <Select.Option>더보기</Select.Option>
            <Select.Option>메인 </Select.Option>
            <Select.Option>아이템</Select.Option>
          </Select.Group>
        </Select>
      </div>
    )
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const Playground: Story = {}
