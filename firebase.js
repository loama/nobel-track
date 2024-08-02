// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1EM1HRoNgJMzl7pegGgF-FBZTdp3C14s',
  authDomain: 'nobel-track.firebaseapp.com',
  projectId: 'nobel-track',
  storageBucket: 'nobel-track.appspot.com',
  messagingSenderId: '347213198725',
  appId: '1:347213198725:web:3386a11eba9f99f41f00ec',
  measurementId: 'G-2YHCHCXK08'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Export the initialized Firebase app
export { app, db }
