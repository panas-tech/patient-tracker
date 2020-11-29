import {useEffect} from 'react'
import {db} from './firebase'
import logo from './logo.svg'
import './styles/index.css'

function App() {
  useEffect(() => {
    db.collection('test').add({
      works: true,
    })
  }, [])

  return (
    <div className="bg-gray-700">
      <header className="min-h-screen flex flex-col items-center justify-center text-white">
        <img
          src={logo}
          className="h-40 pointer-events-none animate-spin duration-1000"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
