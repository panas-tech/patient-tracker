import clsx from 'clsx'

export function Button({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={clsx(
        'flex justify-center items-center rounded bg-blue-600 w-full h-10 text-white shadow hover:bg-blue-800',
        'focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
        props.disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'transform focus:-translate-y-0.5 hover:-translate-y-0.5 transition-transform',
        className
      )}
      {...props}
    />
  )
}
