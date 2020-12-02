import {RouteProps, Route, Redirect} from 'react-router-dom'
import {useAuth} from '../auth/AuthProvider'

export function ProtectedRoute({children, ...rest}: RouteProps) {
  const {user} = useAuth()
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    />
  )
}
