import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYSXVR6HgVlAOATc795mDZMaoAny_hcYc",
  authDomain: "pokedex-card.firebaseapp.com",
  projectId: "pokedex-card",
  storageBucket: "pokedex-card.appspot.com",
  messagingSenderId: "598771076689",
  appId: "1:598771076689:web:77a1e78751602cd7983270"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}