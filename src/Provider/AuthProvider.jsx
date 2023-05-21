import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);


  const googleProvider = new GoogleAuthProvider();

  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    setIsLoggedIn(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleSignin = () => {
    return signInWithPopup(auth, googleProvider )   
  }

  const handleSignout = () => {
    setLoading(true);
    setIsLoggedIn(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setIsLoggedIn(!!loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    handleCreateUser,
    handleLogin,
    handleGoogleSignin,
    handleSignout,
    isLoggedIn, 
    setIsLoggedIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;