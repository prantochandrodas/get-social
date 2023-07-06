import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from "../../firebase/firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,SetUser]=useState(null);
    const [loading,setLoading]=useState(true);
    
    //    signUp 
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //   login 
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google login 
    const createUserWithGoogle=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

    //logout 
    const logOut=()=>{
        setLoading(true);
       return signOut(auth);
    }
    // update user
    const userUpdata=(userInfo)=>{
        setLoading(true);
       return updateProfile(auth.currentUser,userInfo)
    }
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            SetUser(currentUser);
            setLoading(false);
        })
        return ()=>unSubscribe();
    },[])
    const authInfo={
        createUser,
        loginUser,
        user,
        logOut,
        loading,
        userUpdata,
        setLoading,
        createUserWithGoogle
    }
 
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;