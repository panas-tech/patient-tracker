import clsx from 'clsx'
import {forwardRef} from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({className, ...props}, ref) => (
  <input
    ref={ref}
    className={clsx(
      'rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
      className
    )}
    {...props}
  />
))
