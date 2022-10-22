import firebase from '@react-native-firebase/app';

const credentials = {
  apiKey: YOUR-API-KEY,
  authDomain: "rn-uber-eats-clone-d0543.firebaseapp.com",
  projectId: "rn-uber-eats-clone-d0543",
  storageBucket: "rn-uber-eats-clone-d0543.appspot.com",
  messagingSenderId: "429561508058",
  appId: "1:429561508058:web:dec8405d107755705975e3",
  measurementId: "G-B84519WM5H"
};

const config = {
  name: 'SECONDARY_APP',
};

await firebase.initializeApp(credentials, config);

export default firebase;