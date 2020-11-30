import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyALl2JUWFlwZz5O54DmE7EguxvX57QgpwM',
  authDomain: 'patient-tracker-d45ae.firebaseapp.com',
  databaseURL: 'https://patient-tracker-d45ae.firebaseio.com',
  projectId: 'patient-tracker-d45ae',
  storageBucket: 'patient-tracker-d45ae.appspot.com',
  messagingSenderId: '174224703710',
  appId: '1:174224703710:web:1494ab903dcbe61eba424f',
  measurementId: 'G-SQHF3D10QN',
})

export const db = firebase.firestore()
export const auth = firebase.auth()

if (process.env.NODE_ENV === 'development' || process.env.CI) {
  db.useEmulator('localhost', 8080)
  auth.useEmulator('http://localhost:9099/')
}
