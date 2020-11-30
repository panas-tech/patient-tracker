import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {auth} from '../../firebase'

interface SignInFormValues {
  email: string
  password: string
}

export function SignInPage() {
  const {register, handleSubmit} = useForm<SignInFormValues>()
  const history = useHistory()

  useEffect(() => {
    if (auth.currentUser) history.replace('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.currentUser])

  async function onSubmit({email, password}: SignInFormValues) {
    await auth.signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-blue-400 flex items-center justify-center">
      <div className="bg-white p-16 rounded-3xl shadow-xl w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block">
            <span className="text-gray-700">Correo Electrónico</span>
            <input
              name="email"
              ref={register}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="johndoe@email.com"
              type="text"
            />
          </label>
          <label className="flex flex-col mt-4">
            <span className="text-gray-700">Contraseña</span>
            <input
              name="password"
              ref={register}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="password"
            />
          </label>
          <button className="rounded font-light bg-blue-600 w-full py-2 mt-8 text-white shadow focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            Iniciar Sessión
          </button>
        </form>
      </div>
    </div>
  )
}
