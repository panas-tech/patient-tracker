import { Patient } from './type'

export function PatientListItem({ patient }: { patient: Patient }) {
    return (
        <li key={patient.id} data-testid={patient.id}>
            <div className="w-full p-4">
                <div className="p-12 text-left shadow-2xl rounded-lg bg-white opacity-75">
                    <div className="flex flex-wrap content-center justify-end">
                        <button className="cursor-pointer z-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="text-gray-600 h-5 w-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-5">
                        <div className="col-span-5 lg:col-span-2 flex flex-wrap content-center justify-center">
                            <div className="overflow-hidden w-20 h-20 shadow text-2xl font-bold rounded-full bg-gray-400 text-white flex flex-wrap content-center justify-center mt-2 mb-2">
                                {patient.firstName.charAt(0).toUpperCase()}
                            </div>
                        </div>
                        <div className="col-span-5 lg:col-span-3 flex flex-wrap content-center justify-center lg:justify-left mr-2">
                            <h2 className="text-xl font-bold max-h-20 overflow-hidden overflow-ellipsis ">
                                {patient.firstName} {patient.lastName}
                            </h2>
                        </div>
                    </div>
                    <div className="text-base flex items-center justify-left mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-blue-600 pr-4 h-9 w-9"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                        </svg>
                        <span className="text-m w-5/6 overflow-hidden truncate">
                            {patient.email}
                        </span>
                    </div>
                    <div className="text-base flex items-center justify-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 text-blue-600 pr-4 h-9 w-9"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <span className="text-m overflow-hidden truncate w-5/6">
                            {patient.phoneNumber}
                        </span>
                    </div>
                    <div className="text-base flex items-center justify-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 text-blue-600 pr-4 h-9 w-9"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                        </svg>
                        <span className="text-m overflow-hidden truncate w-5/6">
                            {patient.identification}
                        </span>
                    </div>
                    <div className="text-base flex items-center justify-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 text-blue-600 pr-4 h-9 w-9"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="text-m overflow-hidden truncate w-5/6">
                            {patient.dateOfBirth}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    )
}
