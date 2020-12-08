import React from 'react'

type ModalContextType = {isOpen:boolean, open:()=>void, close:()=>void}

const ModalContext = React.createContext<ModalContextType>(
  (undefined as unknown) as ModalContextType
)

export function ModalProvider({
  children,
}: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return <ModalContext.Provider value={{isOpen, open, close}}>{children}</ModalContext.Provider>
}

export function Modal({children}: {children: React.ReactNode}) {
  const {isOpen} = useModal()
  return isOpen ? (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">{children}</div>
      </div>
    </div>
  ) : null
}

export function ModalHeader({title}: {title: string}) {
  const {close} = useModal()
  return (
    <div className="flex justify-between items-center pb-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        className="cursor-pointer z-50"
        onClick={() => close()}
      >
        <svg
          className="fill-current text-black"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </button>
    </div>
  )
}

export function useModal() {
  const context = React.useContext<ModalContextType>(ModalContext)
  if (!context) {
    throw Error('useModal can only be called from within ModalProvider')
  }
  return context
}
