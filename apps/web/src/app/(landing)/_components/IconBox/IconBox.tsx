'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

import { IconBoxContainer } from './IconBox.css'

interface IconBoxProps {
  name: keyof typeof IconProps
}

const IconProps = {
  notion: {
    width: 41,
    left: null,
    right: 300,
    y: 200,
    height: 41,
    color: '#F2F2F2',
    rotate: -10.71,
  },
  jira: {
    width: 78,
    left: 170,
    right: null,
    y: 200,
    height: 41,
    delay: 0,
    color: '#E5F0FF',
    rotate: -30,
  },
  excel: {
    width: 96,
    left: 300,
    right: null,
    y: 0,
    height: 50,
    color: '#C9EEDD',
    rotate: -22.71,
  },
  file: {
    width: 43,
    left: null,
    right: 200,
    height: 47,
    y: 400,
    rotate: 18.1,
  },
  folder: {
    width: 55,
    left: undefined,
    right: 100,
    height: 55,
    y: 200,
    color: '#FFFBE8',
    rotate: 10.72,
  },
  pen: {
    width: 50,
    left: 300,
    right: null,
    height: 50,
    y: 400,
    rotate: -16.1,
  },
  spredadSheet: {
    width: 101,
    left: 0,
    y: 0,
    right: 160,
    height: 40,
    color: '#EFF4F1',
    rotate: -22.71,
    delay: 1,
  },
}

export const IconBox = ({ name }: IconBoxProps) => {
  const icon = IconProps[name]

  const style = {
    left: icon?.left ? icon?.left : undefined,
    right: icon?.right ? icon?.right : undefined,
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
        className="card"
        variants={{
          offscreen: {
            y: -50 + icon.y,
            x: 0,
            opacity: 0,
            rotate: icon.rotate,
          },
          onscreen: {
            y: 0 + icon.y,
            x: 0,
            opacity: 1,
            right: 100,
            rotate: icon.rotate,
            transition: {
              type: 'spring',
              bounce: 0.4,
            },
          },
        }}
      >
        <div
          className={IconBoxContainer}
          style={{
            transform: `rotate(${icon.rotate}deg)`,
          }}
        >
          <Image
            src={`/image/${name}.png`}
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
