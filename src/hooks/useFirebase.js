import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup,  GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import authInit from '../Firebase/Firebase.init';

authInit();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleSignIn = () => {
        setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        // const user = result.user;
        setUser(result.user);
        window.localStorage.setItem("email", result.user.email);
  })
  .finally(() => setIsLoading(false))
  
  
  .catch((error) => {

    // ---------Handle Errors here.---------------
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
    }

    
   //---------User State Change Observation
   useEffect( () => {
       const unSubscribed =  onAuthStateChanged (auth, user=> {
           if(user){
               console.log('inside state changed', user);
               setUser(user);

           }
          
       });
       return () => unSubscribed;
   }, [auth])

   const logout = () => {
    signOut(auth)
    .then(() => {
        setUser({});
    })
    .finally( () => setIsLoading(false)) ;
}

   
    return{
        user,
        isLoading,
        googleSignIn,
        logout,

    }

};

export default useFirebase;