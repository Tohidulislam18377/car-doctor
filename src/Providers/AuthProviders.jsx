import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.confi';

export const AuthContact = createContext();
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const singIn = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const createUser = (email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        // console.log('current user',currentUser);
        setLoading(false)
      })
      return ()=>{
        return unsubscribe
      }
    },[])

    const logOut = ()=>{
      setLoading(true)
      return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut
    }


    return (
      <AuthContact.Provider value={authInfo}>
        {children}
      </AuthContact.Provider>
    );
};

export default AuthProviders;