import {Modal, useModal, ModalHeader} from '../../components/modal/Modal'
import {Doctor} from './types'
import React, {useState} from 'react'
import {Button} from '../../components/Button'
import {useEffect} from 'react'
import {DoctorForm} from './DoctorForm'
import {DoctorListItem} from './DoctorListItem'
import {db} from '../../firebase'

export function DoctorList() {
  const {open} = useModal()
  const [doctorList, setDoctorList] = useState<Doctor[]>([])

  useEffect(() => {
    const unsubscribe = db.collection('doctors').onSnapshot((snapshot) => {
      setDoctorList(
        snapshot.docs
          .map((doc) => {
            const data = doc.data()
            return {
              id: doc.id,
              firstName: data.firstName,
              lastName: data.lastName,
              phoneNumber: data.phoneNumber,
              specialty: data.specialty,
              identification: data.identification,
              email: data.email,
            }
          })
      )
    })

    return () => unsubscribe()
  })

  return (
    <>
      <div className="h-screen py-8 overflow-hidden overflow-y-scroll">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-3xl font-bold">Doctores</h1>
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
            {doctorList.length === 0 ? (
              <>No hay doctores registrados en este momento</>
            ) : (
              <ul className="flex flex-col justify-start w-full">
                {doctorList.map((doctor) => (
                  <li key={doctor.id} data-testid={doctor.id}>
                    <DoctorListItem
                      doctor={doctor}
                      onDoctorDeleted={async (id) => {
                        await db.collection('doctors').doc(id).delete()
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Modal>
        <ModalHeader title="Nuevo Doctor" />
        <DoctorForm />
      </Modal>
    </>
  )
}
