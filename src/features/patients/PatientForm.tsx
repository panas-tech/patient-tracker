import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Gender, Nationality} from './type'
export function PatientForm() {
  return (
    <form className="w-full mx-auto grid grid-cols-4">
      <label className="block col-span-4">
        <span className="text-gray-700">Apellidos</span>
        <Input
          name="lastName"
          className="mt-1 block w-full"
          placeholder="Salazar Marques"
          type="text"
        />
      </label>
      <label className="block block col-span-4 mt-2">
        <span className="text-gray-700">Nombres</span>
        <Input
          name="name"
          className="mt-1 block w-full"
          placeholder="Salvador Jesus"
          type="text"
        />
      </label>
      <label className="block col-span-2 mt-2 mr-2">
        <span className="text-gray-700">Fecha de Nacimiento</span>
        <Input name="dateOfBirth" className="mt-1 block w-full" type="date" />
      </label>
      <label className="block col-span-2 mt-2 ml-2">
        <span className="text-gray-700">Nacionalidad</span>
        <select name="name" className="mt-1 block w-full ">
          {Object.values(Nationality).map((nationality) => (
            <option value={nationality}>{nationality}</option>
          ))}
        </select>
      </label>
      <label className="mt-1 block col-span-2 mt-2 mr-2">
        <span className="text-gray-700">Sexo</span>
        <Input
          name="identification"
          className="mt-1 block w-full"
          placeholder="V-11111111"
          type="text"
        />
      </label>
      <label className="mt-1 block col-span-2 mt-2 ml-2">
        <span className="text-gray-700">Sexo</span>
        <select name="name" className="mt-1 block w-full ">
          {Object.values(Gender).map((gender) => (
            <option value={gender}>{gender}</option>
          ))}
        </select>
      </label>
      <label className="mt-1 block col-span-2 mt-2 mr-2">
        <span className="text-gray-700">Email</span>
        <Input
          name="email"
          className="mt-1 block w-full"
          placeholder="email@whatever.com"
          type="email"
        />
      </label>
      <label className="mt-1 block col-span-2 mt-2 ml-2">
        <span className="text-gray-700">Telefono</span>
        <Input
          name="phoneNumber"
          className="mt-1 block w-full"
          placeholder="+58 (212) 555 5555"
          type="text"
        />
      </label>
      <label className="block block col-span-4 mt-2">
        <span className="text-gray-700">Direccion</span>
        <Input
          name="address"
          className="mt-1 block w-full"
          placeholder="Calle Los Ángeles, Edificio Los Ángeles, Chacao"
          type="text"
        />
      </label>
      <Button className="mt-8 col-span-4" type="submit">
        Registrar Paciente
      </Button>
    </form>
  )
}
