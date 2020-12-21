export enum Specialty {
  ORTODONCIA = 'Ortodoncia',
  ENDODONCIA = 'Endodoncia',
  PERIODONCIA = 'Periodoncia',
  PROSTODONCIA = 'Prostodoncia',
  PROTESIS_MAXILOFACIAL = 'Protesis Maxilofacial',
  ODONTOPEDIATRIA = 'Odontopediatría',
}

export interface Doctor {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  specialty: Specialty
  identification: string
  email: string
}
