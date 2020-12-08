import {Input} from '../../components/Input'
import {Nationality, Gender, Patient} from './type'
import {Button} from '../../components/Button'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {db} from '../../firebase'
import {useModal} from '../../components/modal/Modal'
import clsx from 'clsx'
import { Select } from '../../components/Select';

export function PatientForm() {
  const {close} = useModal()
  const [submitting, setSubmitting] = useState(false)
  const {register, handleSubmit, reset, errors} = useForm<Patient>()
  async function onSubmit(patient: Patient) {
    setSubmitting(true)
    await db.collection('patients').add(patient)
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
      <label className="block col-span-2 mt-2 mr-2">
        <span className="text-gray-700">Fecha de Nacimiento</span>
        <Input
          name="dateOfBirth"
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => {
              var date = Date.parse(value.trim())
              return !isNaN(date)
            },
          })}
          className={clsx(
            'mt-1 block w-full',
            errors.dateOfBirth && 'border-red-600'
          )}
          type="date"
        />
      </label>
      <label className="block col-span-2 mt-2 ml-2">
        <span className="text-gray-700">Nacionalidad</span>
        <Select
          ref={register()}
          name="nationality"
          className="mt-1 block w-full "
        >
          {Object.values(Nationality).map((nationality) => (
            <option key={nationality} value={nationality}>{nationality}</option>
          ))}
        </Select>
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
        <span className="text-gray-700">Sexo</span>
        <Select name="gender" className="mt-1 block w-full " ref={register()}>
          {Object.values(Gender).map((gender) => (
            <option key={gender} value={gender}>{gender}</option>
          ))}
        </Select>
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
      <label className="block block col-span-4 mt-2">
        <span className="text-gray-700">Direccion</span>
        <Input
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => Boolean(value.trim()),
          })}
          name="address"
          className={clsx(
            'mt-1 block w-full',
            errors.address && 'border-red-600'
          )}
          placeholder="Calle Los Ángeles, Edificio Los Ángeles, Chacao"
          type="text"
        />
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
          'Registrar Paciente'
        )}
      </Button>
    </form>
  )
}
