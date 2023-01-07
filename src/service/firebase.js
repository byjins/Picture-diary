// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { APP_KEY } from './secret';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APP_KEY.apiKey,
  authDomain: APP_KEY.authDomain,
  databaseURL: APP_KEY.databaseURL,
  projectId: APP_KEY.projectId,
  storageBucket: APP_KEY.storageBucket,
  messagingSenderId: APP_KEY.messagingSenderId,
  appId: APP_KEY.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
