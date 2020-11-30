import {NavLink} from 'react-router-dom'

export function AppNavigation() {
  return (
    <div className="grid">
      <div className="h-44 flex flex-wrap content-center justify-center align-middle">
        Perfil
      </div>
      <NavLink
        to="/"
        exact={true}
        className=" pl-4 pt-2"
        activeClassName="font-bold"
      >
        Inicio
      </NavLink>
      <NavLink
        to="/appointments"
        className="pl-4 pt-2"
        activeClassName="font-bold"
      >
        Citas
      </NavLink>
      <NavLink to="/doctors" className="pl-4 pt-2" activeClassName="font-bold">
        Doctores
      </NavLink>
      <NavLink to="/patients" className="pl-4 pt-2" activeClassName="font-bold">
        Pacientes
      </NavLink>
    </div>
  )
}
