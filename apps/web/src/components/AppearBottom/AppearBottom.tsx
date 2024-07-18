'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

interface AppearBottomProps extends PropsWithChildren {
  delay?: number
}

export const AppearBottom = ({ children, delay }: AppearBottomProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
