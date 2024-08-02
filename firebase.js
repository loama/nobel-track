// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyADRbKMe3ng14KHhDv10sNtcRx_38Yp8Kk',
  authDomain: 'feredu-gymtrack.firebaseapp.com',
  projectId: 'feredu-gymtrack',
  storageBucket: 'feredu-gymtrack.appspot.com',
  messagingSenderId: '839948051183',
  appId: '1:839948051183:web:9d9a678970e102c28ef11a'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Export the initialized Firebase app
export { app, db }
