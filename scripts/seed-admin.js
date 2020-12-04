const admin = require('firebase-admin')

process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099'

admin
  .initializeApp({projectId: 'patient-tracker-d45ae'})
  .auth()
  .createUser({email: 'admin@email.com', password: 'password'})
  .then(() => {
    console.info('Admin user seeded')
  })
