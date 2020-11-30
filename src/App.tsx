import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {SignInPage} from './features/auth/SignInPage'
import {AppNavigation} from './features/routing/AppNavigation'
import {AppRoutes} from './features/routing/AppRoutes'
import {ProtectedRoute} from './features/routing/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <SignInPage />
        </Route>
        <ProtectedRoute path="/">
          <div className="grid grid-cols-10">
            <div className="col-span-2 bg-gray-100">
              <AppNavigation />
            </div>
            <div className="col-span-8">
              <AppRoutes />
            </div>
          </div>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default App
