import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {db} from '../../firebase'
import {DiagnosticForm} from './DiagnosticForm'
import {Diagnostic} from './types'
import {enumToColor} from './utils'

export function Diagnostics() {
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
    <div className="h-screen py-8 overflow-hidden overflow-y-scroll">
      <h1 className="text-3xl font-bold">Nuevo Diagnóstico</h1>
      <div className="w-full bg-white rounded-2xl p-8 shadow mt-4">
        <DiagnosticForm />
      </div>
      <ul className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        {diagnosticList.map((diagnostic) => (
          <li
            className="border bg-white rounded-xl shadow overflow-hidden"
            key={diagnostic.name}
            data-testid={diagnostic.name}
          >
            <div className="p-4 text-center">{diagnostic.name}</div>
            <div
              className={clsx('w-full h-12', enumToColor(diagnostic.color))}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
