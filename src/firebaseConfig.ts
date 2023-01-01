// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'xx',
    authDomain: 'xx',
    projectId: 'xx',
    storageBucket: 'xx',
    messagingSenderId: 'xx',
    appId: 'xx',
    measurementId: 'xx',
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)
export const db: Firestore = getFirestore(app)
export const analytics = getAnalytics(app);