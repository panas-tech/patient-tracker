import {Button} from '../../components/Button'
import {EmptyPatientsView} from './EmptyPatientView'
import {useState} from 'react'
import {Modal} from '../../components/Modal'
import {Input} from '../../components/Input'
import {PatientForm} from './PatientForm'

export function PatientList() {
  const [isAddingPatient, setAddingPatient] = useState<Boolean>()
  return (
    <>
      <div className="h-screen py-8 overflow-hidden overflow-y-scroll">
        <div className="grid grid-cols-10">
          <div className="flex flex-wrap content-center col-span-9">
            <h1 className="text-3xl font-bold">Pacientes</h1>
          </div>
          <div className="flex flex-wrap content-center col-span-1">
            <Button
              className="h-8"
              onClick={() => {
                setAddingPatient(true)
              }}
            >
              New
            </Button>
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl p-8 shadow mt-4 flex">
          <EmptyPatientsView />
        </div>
      </div>
      {isAddingPatient ? (
        <Modal
          title="Nuevo Paciente"
          onClose={() => {
            console.log('Close Modal')
            setAddingPatient(false)
          }}
        >
          <PatientForm />
        </Modal>
      ) : null}
    </>
  )
}
