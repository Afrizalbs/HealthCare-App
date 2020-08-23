import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCNb8DoLBtXXB-Zl9NU4vNou5zMXwExck4',
  authDomain: 'my-dokter.firebaseapp.com',
  databaseURL: 'https://my-dokter.firebaseio.com',
  projectId: 'my-dokter',
  storageBucket: 'my-dokter.appspot.com',
  messagingSenderId: '807607266671',
  appId: '1:807607266671:web:e66eb99eaa08362d4fcc9a',
});

const FireBase = firebase;

export default FireBase;
