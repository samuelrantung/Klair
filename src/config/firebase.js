import firebase from 'firebase/app';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDrQONbwhue0JTR5DsZfypGPvASLIYRSU4',
  authDomain: 'klair-4135a.firebaseapp.com',
  projectId: 'klair-4135a',
  storageBucket: 'klair-4135a.appspot.com',
  messagingSenderId: '1052356472372',
  appId: '1:1052356472372:web:8e115230a0e1c28839e461',
  measurementId: 'G-TNVJJ4EFMJ',
  databaseURL:
    'https://klair-4135a-default-rtdb.asia-southeast1.firebasedatabase.app/',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
