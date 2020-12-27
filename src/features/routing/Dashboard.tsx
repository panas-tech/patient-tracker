import {Switch, Route} from 'react-router-dom'
import {AppointmentList} from '../appointments/AppointmentList'
import {Diagnostics} from '../diagnostics/Diagnostics'
import {DoctorList} from '../doctors/DoctorList'
import {Home} from '../home/Home'
import {PatientList} from '../patients/PatientList'
import {AppNavigation} from './AppNavigation'
import {ModalProvider} from '../../components/modal/Modal'

export function Dashboard() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 h-screen">
      <AppNavigation />
      <div className="w-full mx-auto px-4 max-w-screen-lg">
        <Switch>
          <Route path="/appointments">
            <AppointmentList />
          </Route>
          <Route path="/doctors">
            <ModalProvider>
              <DoctorList />
            </ModalProvider>
          </Route>
          <Route path="/patients">
            <ModalProvider>
              <PatientList />
            </ModalProvider>
          </Route>
          <Route path="/diagnostics">
            <ModalProvider>
              <Diagnostics />
            </ModalProvider>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
