import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCtX1vyu6WVBI2LzPQFTkC2JpErax8ko6E",
  authDomain: "app-suckhoe3.firebaseapp.com",
  projectId: "app-suckhoe3",
  storageBucket: "app-suckhoe3.appspot.com",
  messagingSenderId: "128446065354",
  appId: "1:128446065354:web:d94c1862b36c8c03e96233"
};
// initialize firebase
// initializeApp(firebaseConfig);
// export const auth = getAuth();
const app = initializeApp(firebaseConfig);
export const database = getFirestore();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
  });
  
  export { auth };