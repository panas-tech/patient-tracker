import {createContext, useContext, useEffect, useReducer} from 'react'
import {auth} from '../../firebase'

type User = typeof auth.currentUser

interface Auth {
  signIn(email: string, password: string): void
  signOut(): void
  user: User
  loading: boolean
  status: 'loading' | 'signedIn' | 'signedOut'
}

const AuthContext = createContext<Auth>((undefined as unknown) as Auth)

type Action = {type: 'signIn'; payload: User} | {type: 'signOut'}

type State = {
  status: 'loading' | 'signedIn' | 'signedOut'
  user: User
}

const initialState = {
  status: 'loading' as const,
  user: null,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'signIn':
      return {status: 'signedIn', user: action.payload}
    case 'signOut':
      return {...state, status: 'signedOut'}
    default:
      return state
  }
}

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const signIn = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password)

  const signOut = async () => {
    console.log('?')
    await auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({type: 'signIn', payload: user})
      } else {
        dispatch({type: 'signOut'})
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        status: state.status,
        signIn,
        signOut,
        loading: state.status === 'loading',
        user: state.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
