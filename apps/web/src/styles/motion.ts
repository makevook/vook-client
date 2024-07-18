import { AnimationProps, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

const springTransition = {
  type: 'spring',
  stiffness: 100,
}

const defaultProperties = {
  initial: 'hidden',
  animate: 'visible',
}

export const fromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
}

export const fromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
}

export const exitToBottom = {
  opacity: 0,
  y: 30,
  transition: {
    duration: 0.1,
  },
}

export const appearFromLeft: AnimationProps = {
  ...defaultProperties,
  variants: fromLeft,
}

export const appearFromBottom: AnimationProps = {
  ...defaultProperties,
  variants: fromBottom,
  exit: exitToBottom,
}

export const orchestrate: AnimationProps = {
  ...defaultProperties,
  variants: {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  },
}

export const orchestrateFast: AnimationProps = {
  ...defaultProperties,
  variants: {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  },
}

export type MotionComponentProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & { isOrchestration?: boolean }
