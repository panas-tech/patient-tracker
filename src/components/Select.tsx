import clsx from 'clsx'
import {forwardRef} from 'react'
export const Select = forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement>
>(({className, ...props}, ref) => (
  <select
    ref={ref}
    className={clsx(
      'rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
      className
    )}
    {...props}
  />
))
