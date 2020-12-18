import {useEffect, useRef, useState} from 'react'
import {Transition} from '@headlessui/react'
import {Sidebar} from './Sidebar'
import {useLocation} from 'react-router-dom'

export function AppNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<string>()
  const location = useLocation()

  useEffect(() => {
    // if location changes and the sidebar is open, close it
    if (ref.current && ref.current !== location.pathname && isOpen)
      setIsOpen(false)
  }, [location.pathname, isOpen])

  // keep track of the location
  useEffect(() => {
    ref.current = location.pathname
  }, [location.pathname])

  return (
    <>
      <Transition show={isOpen}>
        {/* mobile overlay/backdrop */}
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="md:hidden fixed w-full h-full top-0 left-0"
        >
          <div className="absolute w-full h-full bg-gray-900 opacity-75" />
        </Transition.Child>
        {/* mobile sliding sidebar */}
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="md:hidden h-full w-screen z-10 fixed top-0 left-0 flex items-start"
        >
          <Sidebar />
          <button
            className="p-4 h-auto flex-grow-0"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Transition.Child>
      </Transition>
      <nav className="flex md:flex-col md:h-full w-screen md:w-auto p-4 md:p-0 bg-white">
        <div className="flex justify-between items-center w-full md:hidden">
          <div>Logo</div>
          <button onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block h-full w-96">
          <Sidebar />
        </div>
      </nav>
    </>
  )
}
