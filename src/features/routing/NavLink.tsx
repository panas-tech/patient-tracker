import clsx from 'clsx'
import {NavLink as RRNavLink} from 'react-router-dom'

export function NavLink({
  className,
  activeClassName,
  ...props
}: React.ComponentProps<RRNavLink>) {
  return (
    <RRNavLink
      className={clsx(
        className,
        'rounded w-full p-2 flex items-center text-gray-400 transition-colors hover:bg-opacity-30 hover:bg-gray-300 hover:text-gray-600'
      )}
      activeClassName={clsx(
        activeClassName,
        'bg-gray-300 text-gray-900 opacity-100 bg-opacity-75'
      )}
      {...props}
    />
  )
}
