// firebaseConfig.js
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

import firebaseConfig from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
