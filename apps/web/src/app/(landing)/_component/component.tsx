'use client'

import React from 'react'
import Image from 'next/image'
import { vars } from '@vook-client/design-system'

import { IconBoxContainer } from './component.css'

interface IconBoxProps {
  name: keyof typeof IconProps
}

const IconProps = {
  notion: { width: 41, height: 41, color: '#F2F2F2', rotate: 10.75 },
  jira: { width: 78, height: 41, color: '#E5F0FF', rotate: 12.95 },
  excel: { width: 96, height: 50, color: '#C9EEDD', rotate: -22.71 },
  file: {
    width: 43,
    height: 47,
    color: vars.colors['palette-primary-100'],
    rotate: -18.1,
  },
  folder: { width: 55, height: 55, color: '#FFFBE8', rotate: -10.72 },
  pen: {
    width: 50,
    height: 50,
    color: vars.colors['palette-primary-50'],
    rotate: -16.1,
  },
  spredadSheet: { width: 101, height: 40, color: '#EFF4F1', rotate: -22.71 },
}

export const IconBox = ({ name }: IconBoxProps) => {
  const icon = IconProps[name]
  return (
    <div
      className={IconBoxContainer}
      style={{
        backgroundColor: icon.color,
        transform: `rotate(${icon.rotate}deg)`,
      }}
    >
      <Image
        src={`/image/${name}.png`}
        alt={`Icon Image of ${name}`}
        width={icon.width}
        height={icon.height}
        style={{ objectFit: 'contain' }}
        loading="lazy"
      />
    </div>
  )
}
