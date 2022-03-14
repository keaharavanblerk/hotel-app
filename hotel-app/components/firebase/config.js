import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRQoJc4WzUrCMXG-aW0VpW--trpZLh-wU",
  authDomain: "hotel-app-b790f.firebaseapp.com",
  projectId: "hotel-app-b790f",
  storageBucket: "hotel-app-b790f.appspot.com",
  messagingSenderId: "56729837130",
  appId: "1:56729837130:web:8b3dea377ec925bb4250b3",
  measurementId: "G-D6N3CZK4N0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app()
}

export { firebase }