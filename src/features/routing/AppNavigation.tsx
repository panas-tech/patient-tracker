import {NavLink} from 'react-router-dom'
import {useAuth} from '../auth/AuthProvider'

export function AppNavigation() {
  const {signOut} = useAuth()
  return (
    <div className="hidden sm:flex bg-white flex-col justify-between items-center h-full p-4">
      <div className="flex flex-col">
        <div className="h-44 flex flex-wrap content-center justify-center align-middle">
          User Profile
        </div>
        <NavLink
          to="/"
          exact={true}
          className="pl-4 pt-2"
          activeClassName="font-bold"
        >
          Home
        </NavLink>
        <NavLink
          to="/appointments"
          className="pl-4 pt-2"
          activeClassName="font-bold"
        >
          Appointments
        </NavLink>
        <NavLink
          to="/doctors"
          className="pl-4 pt-2"
          activeClassName="font-bold"
        >
          Doctors
        </NavLink>
        <NavLink
          to="/patients"
          className="pl-4 pt-2"
          activeClassName="font-bold"
        >
          Patients
        </NavLink>
        <NavLink
          to="/diagnostics"
          className="pl-4 pt-2"
          activeClassName="font-bold"
        >
          Diagnósticos
        </NavLink>
      </div>
      <button
        data-testid="signout"
        className="p-2 w-full rounded hover:bg-gray-200 flex items-center"
        onClick={signOut}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span className="ml-2">Cerrar Sessión</span>
      </button>
    </div>
  )
}
