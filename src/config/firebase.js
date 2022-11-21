import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhX9d635454q395fEm5a_8upmCBToVe7g",
  authDomain: "barbeariaapp-5523a.firebaseapp.com",
  projectId: "barbeariaapp-5523a",
  storageBucket: "barbeariaapp-5523a.appspot.com",
  messagingSenderId: "350362644306",
  appId: "1:350362644306:web:4966fca43610d987fb548b",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const auth = getAuth(app);
