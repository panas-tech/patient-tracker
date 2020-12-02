import {AuthProvider} from './features/auth/AuthProvider'
import {AppRouter} from './features/routing/AppRouter'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
