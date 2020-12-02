import {Switch, Route} from 'react-router-dom'
import {AppointmentList} from '../appointments/AppointmentList'
import {DoctorList} from '../doctors/DoctorList'
import {Home} from '../home/Home'
import {PatientList} from '../patients/PatientList'
import {AppNavigation} from './AppNavigation'

export function Dashboard() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 bg-gray-100">
        <AppNavigation />
      </div>
      <div className="col-span-8">
        <Switch>
          <Route path="/appointments">
            <AppointmentList />
          </Route>
          <Route path="/doctors">
            <DoctorList />
          </Route>
          <Route path="/patients">
            <PatientList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
