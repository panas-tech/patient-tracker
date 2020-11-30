import {Route, Switch} from 'react-router-dom'
import {AppointmentList} from '../appointments/AppointmentList'
import {DoctorList} from '../doctors/DoctorList'
import {Home} from '../home/Home'
import {PatientList} from '../patients/PatientList'

export function AppRoutes() {
  return (
    <>
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}
