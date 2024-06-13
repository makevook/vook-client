import clsx from 'clsx'

import { step, stepContainer } from './Step.css'

export interface StepProps {
  current: number
  total: number
}

export const Step = ({ current, total }: StepProps) => {
  return (
    <div className={stepContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={clsx({
            [step]: true,
            completed: index < current,
          })}
        />
      ))}
    </div>
  )
}
