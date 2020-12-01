import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {useAuth} from './AuthProvider'

interface SignInFormValues {
  email: string
  password: string
}

export function SignInPage() {
  const {signIn, user} = useAuth()
  const {register, handleSubmit} = useForm<SignInFormValues>()
  const history = useHistory()

  useEffect(() => {
    if (user) history.replace('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  async function onSubmit({email, password}: SignInFormValues) {
    await signIn(email, password)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form
            className="max-w-md w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <button
              type="submit"
              className="rounded font-light bg-blue-600 w-full py-2 mt-8 text-white shadow focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Iniciar Sessión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
