import React, { useState, useContext } from 'react';
import { auth } from "../api/firebase"

export const Context = React.createContext();

export const useAuth = () => {
    return useContext(Context)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');

    // ==================================To get current user=================================//
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
            }}>
            {!loading && children}
        </Context.Provider>
    )
}