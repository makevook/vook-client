import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

import { orchestrate, orchestrateFast } from '@/styles/motion'

type Stagger = 'slow' | 'fast'

type Props = { stagger?: Stagger } & HTMLAttributes<HTMLDivElement> &
  MotionProps

const Orchestration = ({ stagger, children, ...props }: Props) => {
  if (stagger === 'fast') {
    return (
      <motion.div {...orchestrateFast} {...props}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div {...orchestrate} {...props}>
      {children}
    </motion.div>
  )
}

export default Orchestration
