// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhu3jjwEUQ_NiBHNPWhtahwavZ6PUCOQI",
  authDomain: "barbearia-b051e.firebaseapp.com",
  projectId: "barbearia-b051e",
  storageBucket: "barbearia-b051e.appspot.com",
  messagingSenderId: "1007324017687",
  appId: "1:1007324017687:web:ba565a9dc48c3e38855852",
  measurementId: "G-RXSPN9MKZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app