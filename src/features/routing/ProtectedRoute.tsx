import {RouteProps, Route, Redirect} from 'react-router-dom'
import {useAuth} from '../auth/AuthProvider'

export function ProtectedRoute({children, ...rest}: RouteProps) {
  const {status} = useAuth()
  return (
    <Route
      {...rest}
      render={() =>
        status === 'signedIn' ? children : <Redirect to="/login" />
      }
    />
  )
}
