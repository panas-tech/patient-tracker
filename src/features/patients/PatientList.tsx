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
        <div className="grid grid-cols-12">
          <div className="flex flex-wrap content-center col-span-11">
            <h1 className="text-3xl font-bold">Pacientes</h1>
          </div>
          <div className="flex flex-wrap content-center col-span-1">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
