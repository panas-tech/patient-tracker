import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://patient-tracker-d45ae.firebaseio.com',
})

export const registerDoctor = functions.firestore
  .document('doctors/{doctorId}')
  .onCreate(async (snap, context) => {
    const newValue = snap.data()

    await admin
      .auth()
      .createUser({
        uid: snap.id,
        email: newValue.email,
        emailVerified: false,
        phoneNumber: newValue.phoneNumber,
        password: 'password',
        displayName: `${newValue.firstName} ${newValue.lastName}`,
        disabled: false,
      })
      .then(() => {
        console.log(
          ` ${newValue.firstName} was successfully registered`,
          newValue
        )
      })
      .catch((error) => {
        console.log(` ERROR - ${error}`, newValue)
      })
  })

export const deleteDoctor = functions.firestore
  .document('doctors/{doctorId}')
  .onDelete(async (snap, context) => {
    const deletedValue = snap.data()

    const user = await admin.auth().getUserByEmail(deletedValue.email)

    await admin
      .auth()
      .deleteUser(user.uid)
      .then(() => {
        console.log(
          `${deletedValue.firstName} ${deletedValue.lastName} was deleted from auth system`
        )
      })
      .catch((error) => {
        console.log(`ERROR -> ${error}`)
      })
  })
