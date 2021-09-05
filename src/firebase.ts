import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

import { initializeApp, FirebaseApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: 'AIzaSyAuYMLJjo3pPt8W9jwVQUxagOSnVstQSY8',
  authDomain: 'jsnotedoc.firebaseapp.com',
  projectId: 'jsnotedoc',
  storageBucket: 'jsnotedoc.appspot.com',
  messagingSenderId: '307355217218',
  appId: '1:307355217218:web:cc45a79bf876ea3bb0ecdb',
};

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const userAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
