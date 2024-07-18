'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

interface AppearBottomProps extends PropsWithChildren {
  delay?: number
}

export const DrawLeft = ({ children, delay }: AppearBottomProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scaleX: 0,
          transformOrigin: 'left',
        },
        visible: {
          scaleX: 1,
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
