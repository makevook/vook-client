'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

import Notion from './assets/Notion.png'
import Jira from './assets/Jira.png'
import Excel from './assets/Excel.png'
import FileIcon from './assets/File.png'
import Folder from './assets/Folder.png'
import Pen from './assets/Pen.png'
import SpredadSheet from './assets/spredadSheet.png'
import { IconBoxContainer } from './IconBox.css'

interface IconBoxProps {
  name: keyof typeof IconProps
}

const IconProps = {
  notion: {
    width: 41,
    left: null,
    right: 400,
    y: 0,
    height: 41,
    delay: Math.random(),
    reverse: false,
    color: '#F2F2F2',
    rotate: -10.71,
  },
  jira: {
    width: 78,
    left: 170,
    right: null,
    y: 200,
    height: 41,
    delay: Math.random(),
    reverse: true,
    color: '#E5F0FF',
    rotate: -30,
  },
  excel: {
    width: 96,
    left: 300,
    right: null,
    y: 0,
    height: 50,
    delay: Math.random(),
    reverse: false,
    color: '#C9EEDD',
    rotate: -22.71,
  },
  file: {
    width: 43,
    left: null,
    right: 200,
    height: 47,
    delay: Math.random(),
    reverse: true,
    color: '#CDCCF7',
    y: 400,
    rotate: 18.1,
  },
  folder: {
    width: 55,
    left: undefined,
    right: 100,
    height: 55,
    delay: Math.random(),
    reverse: false,
    y: 200,
    color: '#FFFBE8',
    rotate: 10.72,
  },
  pen: {
    width: 50,
    left: 300,
    right: null,
    height: 50,
    delay: Math.random(),
    reverse: true,
    color: '#EFEFFC',
    y: 400,
    rotate: -16.1,
  },
  spredadSheet: {
    width: 101,
    left: 0,
    y: 0,
    right: 160,
    height: 40,
    delay: Math.random(),
    reverse: false,
    color: '#EFF4F1',
    rotate: -22.71,
  },
}

export const IconBox = ({ name }: IconBoxProps) => {
  const icon = IconProps[name]

  const style = {
    left: icon?.left ? icon?.left : undefined,
    right: icon?.right ? icon?.right : undefined,
  }

  const iconImage = {
    notion: Notion,
    jira: Jira,
    excel: Excel,
    file: FileIcon,
    folder: Folder,
    pen: Pen,
    spredadSheet: SpredadSheet,
  }

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      style={{
        position: 'absolute',
        ...style,
      }}
    >
      <motion.div
        variants={{
          offscreen: {
            opacity: 0,
            rotate: icon.rotate,
          },
          onscreen: {
            y: 0 + icon.y,
            opacity: 1,
            right: 100,
            rotate: icon.rotate,
            transition: {
              type: 'spring',
              bounce: 0.4,
              delay: icon.delay,
            },
          },
        }}
      >
        <div
          className={IconBoxContainer}
          style={{
            transform: `rotate(${icon.rotate}deg)`,
            backgroundColor: icon.color,
          }}
        >
          <Image
            src={iconImage[name]}
            alt={`Icon Image of ${name}`}
            width={icon.width}
            height={icon.height}
            style={{
              objectFit: 'contain',
            }}
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
