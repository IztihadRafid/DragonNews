import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //CREATE USER 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //LOG IN/SIGN IN
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //LogOut/SignOut
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    //CURRENT USER
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user auth state', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unSubscribe()
        }
    },[])

    
   
    const authInfo ={user,createUser,logOut,signIn,loading}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;