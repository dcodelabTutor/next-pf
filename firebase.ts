import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD-i_eA9Aj2vSTZmDMkvAojxLQg1oyk7aI',
	authDomain: 'next-11-39b73.firebaseapp.com',
	projectId: 'next-11-39b73',
	storageBucket: 'next-11-39b73.appspot.com',
	messagingSenderId: '643992534397',
	appId: '1:643992534397:web:c5f81aa9f8751b60b86014',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
