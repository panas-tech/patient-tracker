import { Patient } from './type'

export function PatientListItem({ patient }: { patient: Patient }) {
    return (
        <li key={patient.id} data-testid={patient.id}>
            <div className="w-full p-4">
                <div className=" p-12 text-center lg:text-left shadow-2xl rounded-lg bg-white opacity-75">
                    <div className="grid grid-cols-5">
                        <div className="col-span-5 lg:col-span-2 flex flex-wrap content-center justify-center p-4">
                            <img
                                className="rounded-full shadow-sm p-0"
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt="user image"
                            />
                        </div>
                        <h2 className="col-span-5 lg:col-span-3 text-xl font-bold flex flex-wrap content-center justify-left">
                            {patient.firstName}
                        </h2>
                    </div>
                    <p className="text-base flex items-center justify-left lg:justify-start p-1">
                        <svg
                            className="h-4 fill-current text-blue-600 pr-4"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        {patient.email}
                    </p>
                    <p className="text-base flex items-center justify-left lg:justify-start p-1">
                        <svg
                            className="h-4 fill-current text-blue-600 pr-4"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        {patient.phoneNumber}
                    </p>
                    <p className="text-base flex items-center justify-left lg:justify-start p-1">
                        <svg
                            className="h-4 fill-current text-blue-600 pr-4"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        {patient.identification}
                    </p>
                    <p className="text-base flex items-center justify-left lg:justify-start p-1">
                        <svg
                            className="h-4 fill-current text-blue-600 pr-4"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        {patient.dateOfBirth}
                    </p>
                </div>
            </div>
        </li>
    )
}
