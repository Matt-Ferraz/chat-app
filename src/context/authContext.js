import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from '../firebase/firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [ loading, setLoading ] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        Auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if(user) history.push('/chats') 
        })
    }, [user, history]);

    const value = { user }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}