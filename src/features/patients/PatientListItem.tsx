import {Patient} from './type'

export function PatientListItem({
  patient,
  onPatientDeleted,
}: {
  patient: Patient
  onPatientDeleted: (id: string) => void
}) {
  function handleButtonClick() {
    onPatientDeleted(patient.id)
  }

  return (
    <div className="flex flex-row content-center justify-between">
      <div className="flex flex-row">
        <div className="overflow-hidden w-12 h-12 text-xl uppercase rounded-full bg-gray-400 text-white flex flex-wrap content-center justify-center m-2">
          {patient.firstName.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col m-2 overflow-hidden">
          <h2 className="text-l font-bold max-h-6 overflow-hidden overflow-ellipsis max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-3xl">
            {patient.firstName} {patient.lastName}
          </h2>
          <span className="text-sm overflow-hidden overflow-ellipsis text-gray-500 max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-3xl">
            {patient.identification}
          </span>
        </div>
      </div>
      <div className="flex content-center">
        <button
          className="cursor-pointer z-50 p-2 w-full"
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-600 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
