import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useAuth} from '../auth/AuthProvider'
import {SignInPage} from '../auth/SignInPage'
import {ProtectedRoute} from './ProtectedRoute'
import {Dashboard} from './Dashboard'

export function AppRouter() {
  const {loading} = useAuth()
  return loading ? null : (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <SignInPage />
        </Route>
        <ProtectedRoute path="/">
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  )
}
