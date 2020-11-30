import { NavLink } from 'react-router-dom'

type Props = {
    className?: string
}

const AppNavigation: React.FC<Props> = () => {
    return (
        <div className="grid">
            <div className="h-44 flex flex-wrap content-center justify-center align-middle">
                User Profile
            </div>
            <NavLink to="/" exact={true} className="pl-4 pt-2" activeClassName="font-bold">Home</NavLink>
            <NavLink to="/appointments" className="pl-4 pt-2" activeClassName="font-bold">Appointments</NavLink>
            <NavLink to="/doctors" className="pl-4 pt-2" activeClassName="font-bold">Doctors</NavLink>
            <NavLink to="/patients" className="pl-4 pt-2" activeClassName="font-bold">Patients</NavLink>
        </div>)
}

export { AppNavigation }