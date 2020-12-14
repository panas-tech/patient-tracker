export enum Nationality {
  VENEZUELAN = 'Venezolano',
  FOREIGNER = 'Extranjero',
}

export enum Gender {
  MALE = 'Masculino',
  FEMALE = 'Femenino',
}

export interface Patient {
  id: string
  firstName: string
  lastName: string
  nationality: Nationality
  dateOfBirth: Date
  gender: Gender
  identification: string
  email: string
  address: string
  phoneNumber: string
}
