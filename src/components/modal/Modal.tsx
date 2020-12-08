import React, {Dispatch, SetStateAction} from 'react'

type ModalContextType = [boolean, Dispatch<SetStateAction<boolean>>]

const ModalContext = React.createContext<ModalContextType>(
  (undefined as unknown) as ModalContextType
)

export function ModalProvider({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  const state = React.useState(false)
  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
}

export function Modal({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  const [isDisplayed] = useModal()
  return isDisplayed ? (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div>{children}</div>
        </div>
      </div>
    </div>
  ) : null
}

export function ModalHeader() {
  const [, setDisplayed] = useModal()
  return (
    <div className="flex justify-between items-center pb-3">
      <h2 className="text-2xl font-bold">Titulo</h2>
      <button
        className="modal-close cursor-pointer z-50"
        onClick={() => setDisplayed(false)}
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
    throw Error('Use Toggle functionality needs to be inside a modal')
  }
  return context
}
