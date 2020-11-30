import {RouteProps, Route, Redirect} from 'react-router-dom'
import {auth} from '../../firebase'

export function ProtectedRoute({children, ...rest}: RouteProps) {
  const {currentUser} = auth

  return (
    <Route
      {...rest}
      render={() => (currentUser ? children : <Redirect to="/login" />)}
    />
  )
}
