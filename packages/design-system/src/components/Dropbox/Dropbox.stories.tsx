import { Meta, StoryObj } from '@storybook/react'

import { Dropbox, DropboxGroupProps } from './Dropbox'

const meta: Meta = {
  title: 'Dropbox',
  component: Dropbox,
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
      options: ['left', 'right', 'center'],
      control: { type: 'radio' },
      description: '좌우 위치',
    },
  },
  parameters: {
    layout: 'centered',
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: (props: DropboxGroupProps) => {
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
        <Dropbox>
          <Dropbox.Trigger>
            <div
              style={{
                border: '1px solid black',
                borderRadius: '4px',
                padding: '8px',
              }}
            >
              Trigger
            </div>
          </Dropbox.Trigger>
          <Dropbox.Group {...props}>
            <Dropbox.Option>환경설정</Dropbox.Option>
            <Dropbox.Option>더보기</Dropbox.Option>
            <Dropbox.Option>메인 </Dropbox.Option>
            <Dropbox.Option>아이템</Dropbox.Option>
          </Dropbox.Group>
        </Dropbox>
      </div>
    )
  },
}

export default meta

type Story = StoryObj<typeof Dropbox>

export const Playground: Story = {}
