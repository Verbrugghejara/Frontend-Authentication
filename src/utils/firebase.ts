import {FirebaseApp, FirebaseOptions, initializeApp} from 'firebase/app'
import {Auth,getAuth} from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_apiKey as string,
  authDomain: import.meta.env.VITE_authDomain as string,
  projectId: import.meta.env.VITE_projectId as string,
  storageBucket: import.meta.env.VITE_storageBucket as string,
  messagingSenderId: import.meta.env.VITE_messagingSenderId as string,
  appId: import.meta.env.VITE_appId as string,
  measurementId: import.meta.env.VITE_measurementId as string
};


export const app: FirebaseApp = initializeApp(firebaseConfig)
export const auth: Auth = getAuth(); // authentication provider