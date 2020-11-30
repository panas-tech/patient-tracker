import {Switch} from 'react-router-dom'
import {AppointmentList} from '../appointments/AppointmentList'
import {DoctorList} from '../doctors/DoctorList'
import {Home} from '../home/Home'
import {PatientList} from '../patients/PatientList'
import {ProtectedRoute} from './ProtectedRoute'

export function AppRoutes() {
  return (
    <Switch>
      <ProtectedRoute path="/appointments">
        <AppointmentList />
      </ProtectedRoute>
      <ProtectedRoute path="/doctors">
        <DoctorList />
      </ProtectedRoute>
      <ProtectedRoute path="/patients">
        <PatientList />
      </ProtectedRoute>
      <ProtectedRoute exact path="/">
        <Home />
      </ProtectedRoute>
    </Switch>
  )
}
