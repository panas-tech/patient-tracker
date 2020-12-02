import {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../../firebase'

type User = typeof auth.currentUser

interface Auth {
  signIn(email: string, password: string): Promise<User>
  signOut(): void
  user: User
  loading: boolean
}

const AuthContext = createContext<Auth>((undefined as unknown) as Auth)

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User>(null)

  async function signIn(email: string, password: string) {
    const {user} = await auth.signInWithEmailAndPassword(email, password)
    setUser(user)
    return user
  }

  const signOut = async () => await auth.signOut()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
