import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup,  GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import authInit from '../../Firebase/Firebase.init';

authInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user)

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
   }
   useEffect( () => {
       onAuthStateChanged (auth, user=> {
           if(user){
               console.log('inside state changed', user);
               setUser(user);

           }
       })
   }, [])
   
    return{
        user,
        googleSignIn,
        logout,

    }

};

export default useFirebase;