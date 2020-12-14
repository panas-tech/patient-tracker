import {Button} from '../../components/Button'
import {Modal, ModalHeader, useModal} from '../../components/modal/Modal'
import {PatientForm} from './PatientForm'
import {useEffect, useState} from 'react'
import {db} from '../../firebase'
import {Patient} from './type'
import {PatientListItem} from './PatientListItem'

export function PatientList() {
  const {open} = useModal()
  const [patientList, setPatientList] = useState<Patient[]>([])

  useEffect(() => {
    const unsubscribe = db.collection('patients').onSnapshot((snapshot) => {
      setPatientList(
        snapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            firstName: data.firstName,
            lastName: data.lastName,
            nationality: data.nationality,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            identification: data.identification,
            email: data.email,
            address: data.address,
            phoneNumber: data.phoneNumber,
          }
        })
      )
    })

    return () => unsubscribe()
  }, [])

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
            {patientList.length === 0 ? (
              <>No hay pacientes registrados en este momento</>
            ) : (
              <ul className="grid grid-cols-1 lg:grid-cols-2 ">
                {patientList.map((patient) => (
                  <PatientListItem patient={patient} />
                ))}
              </ul>
            )}
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
