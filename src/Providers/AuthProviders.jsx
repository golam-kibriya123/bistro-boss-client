import { useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);


    // create user with email and password
    const createUserWithMailAndPass = (email, passWord) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passWord);
    }



    // login with email andd passWord
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)


    };
    // login with google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    // 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    // authStateChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        }
    }, []);
    const authInfo = {
        user,
        loading,
        createUserWithMailAndPass,
        signIn,
        googleLogin,
        logOut,
        auth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;