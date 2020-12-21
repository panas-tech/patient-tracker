import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {db} from '../../firebase'
import {DiagnosticForm} from './DiagnosticForm'
import {Diagnostic} from './types'
import {enumToColor} from './utils'
import {Button} from '../../components/Button'
import {Modal, ModalHeader, useModal} from '../../components/modal/Modal'

export function Diagnostics() {
  const {open} = useModal()
  const [diagnosticList, setDiagnosticList] = useState<Diagnostic[]>([])

  useEffect(() => {
    const unsubscribe = db.collection('diagnostics').onSnapshot((snapshot) => {
      setDiagnosticList(
        snapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            name: data.name,
            color: data.color,
          }
        })
      )
    })

    return () => unsubscribe()
  }, [])

  return (
    <>
      <div className="h-screen py-8 overflow-hidden overflow-y-scroll">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-3xl font-bold">Diagnostic</h1>
          <div className="w-20">
            <Button
              onClick={() => {
                open()
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-white h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl p-4 shadow mt-4 flex">
          <div className="flex flex-wrap content-center justify-center h-full w-full">
            {diagnosticList.length === 0 ? (
              <>No hay diagnosticos registrados en este momento</>
            ) : (
              <ul className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
                {diagnosticList.map((diagnostic) => (
                  <li
                    className="border bg-white rounded-xl shadow overflow-hidden"
                    key={diagnostic.name}
                    data-testid={diagnostic.name}
                  >
                    <div className="p-4 text-center">{diagnostic.name}</div>
                    <div
                      className={clsx(
                        'w-full h-12',
                        enumToColor(diagnostic.color)
                      )}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Modal>
        <ModalHeader title="Nuevo Diagnostico" />
        <DiagnosticForm />
      </Modal>
    </>
  )
}
