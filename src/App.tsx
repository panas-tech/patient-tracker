import './styles/index.css'
import { AppNavigation } from './features/commons/AppNavigation'
import { AppRoutes } from './features/commons/AppRoutes'


function App() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 bg-gray-100">
        <AppNavigation />
      </div>
      <div className="col-span-8">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
