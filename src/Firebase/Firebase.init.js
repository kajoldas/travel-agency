import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const authInit = () => {
     initializeApp(firebaseConfig);
}

export default authInit;