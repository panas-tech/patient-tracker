import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/tailwind.css'
import 'fontsource-inter'
import 'fontsource-inter/500.css'
import 'fontsource-inter/600.css'
import 'fontsource-inter/700.css'
import 'fontsource-inter/800.css'
import 'fontsource-inter/900.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
