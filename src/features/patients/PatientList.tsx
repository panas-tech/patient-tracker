import {Button} from '../../components/Button'
import {Modal, ModalHeader, useModal} from '../../components/modal/Modal'
import {PatientForm} from './PatientForm'

export function PatientList() {
  const {open} = useModal()
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
                open()
              }}
            >
              New
            </Button>
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl p-8 shadow mt-4 flex">
          <div className="flex flex-wrap content-center justify-center h-full w-full">
            No hay pacientes registrados en este momento
          </div>
        </div>
      </div>
      <Modal>
        <ModalHeader title="Nuevo Paciente" />
        <PatientForm />
      </Modal>
    </>
  )
}
