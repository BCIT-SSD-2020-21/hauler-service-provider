import React, { useState, useContext } from 'react';


export const Context = React.createContext();

export const useAuth = () => {
    return useContext(Context)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');

    return (
        <Context.Provider
            value={{
                currentUser,
            }}>
        </Context.Provider>
    )
}