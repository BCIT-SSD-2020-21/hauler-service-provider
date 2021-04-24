import React, { useState, useContext, useEffect } from 'react';
import { auth } from "../api/firebase"

export const Context = React.createContext();

export const useAuth = () => {
    return useContext(Context)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(true);

    //=========================================Register============================================//
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    //==========================================Login==============================================//
    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    //=========================================Log Out============================================//
    const signout = () => {
        return auth.signOut()
    }

    // ==================================To get current user======================================//
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    return (
        <Context.Provider
            value={{
                currentUser,
                signup,
                signout,
                signin
            }}>
            {!loading && children}
        </Context.Provider>
    )
}