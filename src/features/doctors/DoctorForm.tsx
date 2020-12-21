import {useModal} from '../../components/modal/Modal'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Doctor, Specialty} from './types'
import {db} from '../../firebase'
import {Input} from '../../components/Input'
import clsx from 'clsx'
import {Button} from '../../components/Button'
import {Select} from '../../components/Select'

export function DoctorForm() {
  const {close} = useModal()
  const [submitting, setSubmitting] = useState(false)
  const {register, handleSubmit, reset, errors} = useForm<Doctor>()
  async function onSubmit(doctor: Doctor) {
    setSubmitting(true)
    await db.collection('doctors').add(doctor)
    setSubmitting(false)
    reset()
    close()
  }
  return (
    <form
      className="w-full mx-auto grid grid-cols-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="block col-span-4">
        <span className="text-gray-700">Apellidos</span>
        <Input
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => Boolean(value.trim()),
          })}
          name="lastName"
          className={clsx(
            'mt-1 block w-full',
            errors.lastName && 'border-red-600'
          )}
          placeholder="Salazar Marques"
          type="text"
        />
      </label>
      <label className="block block col-span-4 mt-2">
        <span className="text-gray-700">Nombres</span>
        <Input
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => Boolean(value.trim()),
          })}
          name="firstName"
          className={clsx(
            'mt-1 block w-full',
            errors.firstName && 'border-red-600'
          )}
          placeholder="Salvador Jesus"
          type="text"
        />
      </label>
      <label className="mt-1 block col-span-2 mt-2 mr-2">
        <span className="text-gray-700">Identificacion</span>
        <Input
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => Boolean(value.trim()),
          })}
          className={clsx(
            'mt-1 block w-full',
            errors.identification && 'border-red-600'
          )}
          name="identification"
          placeholder="V-11111111"
          type="text"
        />
      </label>
      <label className="mt-1 block col-span-2 mt-2 ml-2">
        <span className="text-gray-700">Telefono</span>
        <Input
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => Boolean(value.trim()),
          })}
          name="phoneNumber"
          className={clsx(
            'mt-1 block w-full',
            errors.phoneNumber && 'border-red-600'
          )}
          placeholder="+58 (212) 555 5555"
          type="text"
        />
      </label>
      <label className="mt-1 block col-span-2 mt-2 mr-2">
        <span className="text-gray-700">Email</span>
        <Input
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => Boolean(value.trim()),
          })}
          name="email"
          className={clsx(
            'mt-1 block w-full',
            errors.email && 'border-red-600'
          )}
          placeholder="email@whatever.com"
          type="email"
        />
      </label>
      <label className="mt-1 block col-span-2 mt-2 ml-2">
        <span className="text-gray-700">Especialidad</span>
        <Select
          name="specialty"
          className="mt-1 block w-full "
          ref={register()}
        >
          {Object.values(Specialty).map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </Select>
      </label>
      <Button className="mt-8 col-span-4" type="submit">
        {submitting ? (
          <svg className="animate-spin mr-3 h-5 w-5 text-white">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          'Registrar Doctor'
        )}
      </Button>
    </form>
  )
}
