import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAYoILbJmqn4kf6pkvqH3Ks38HoFMQiQ48",
  authDomain: "proyectofinal-coder2023.firebaseapp.com",
  projectId: "proyectofinal-coder2023",
  storageBucket: "proyectofinal-coder2023.appspot.com",
  messagingSenderId: "549821381771",
  appId: "1:549821381771:web:9d2147171e877fb0db288e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);